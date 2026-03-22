import { useReducer, useCallback } from 'react';
import { GameState, GamePhase, Player } from '@/game/types';
import { NODES, findReachableEndpoints, CATEGORY_NAMES, PLAYER_COLORS } from '@/game/board';
import { getRandomQuestion } from '@/game/questions';

const initialState: GameState = {
  phase: 'setup',
  players: [],
  currentPlayerIndex: 0,
  dieValue: null,
  validDestinations: {},
  currentQuestion: null,
  selectedCategory: null,
  lastAnswerCorrect: null,
  isFinalQuestion: false,
  usedQuestionIds: [],
  statusMessage: '',
};

type Action =
  | { type: 'START_GAME'; names: string[] }
  | { type: 'ROLL_DIE' }
  | { type: 'SELECT_DESTINATION'; nodeId: number }
  | { type: 'SELECT_CATEGORY'; category: number }
  | { type: 'ANSWER_QUESTION'; answerIndex: number }
  | { type: 'DISMISS_FEEDBACK' }
  | { type: 'RESET' };

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'START_GAME': {
      const players: Player[] = action.names.map((name, i) => ({
        id: i,
        name,
        color: PLAYER_COLORS[i],
        position: 0,
        wedges: [false, false, false, false, false, false],
      }));
      return {
        ...initialState,
        phase: 'rolling',
        players,
        statusMessage: `Turno de ${players[0].name}. Tira el dado.`,
      };
    }

    case 'ROLL_DIE': {
      const dieValue = Math.floor(Math.random() * 6) + 1;
      const player = state.players[state.currentPlayerIndex];
      const destinations = findReachableEndpoints(player.position, dieValue);

      if (Object.keys(destinations).length === 0) {
        const nextIdx = (state.currentPlayerIndex + 1) % state.players.length;
        return {
          ...state,
          phase: 'rolling',
          currentPlayerIndex: nextIdx,
          dieValue,
          statusMessage: `Has sacado ${dieValue} pero no hay movimientos válidos. Turno de ${state.players[nextIdx].name}.`,
        };
      }

      return {
        ...state,
        phase: 'selectingMove',
        dieValue,
        validDestinations: destinations,
        statusMessage: `Has sacado ${dieValue}. Elige casilla final válida.`,
      };
    }

    case 'SELECT_DESTINATION': {
      const node = NODES[action.nodeId];
      const updatedPlayers = state.players.map((p, i) =>
        i === state.currentPlayerIndex ? { ...p, position: action.nodeId } : p
      );

      if (node.type === 'rollAgain') {
        return {
          ...state,
          players: updatedPlayers,
          phase: 'rolling',
          validDestinations: {},
          dieValue: null,
          statusMessage: '¡Vuelve a tirar!',
        };
      }

      if (node.type === 'center' || action.nodeId === 0) {
        const player = updatedPlayers[state.currentPlayerIndex];
        const hasAllWedges = player.wedges.every(Boolean);
        return {
          ...state,
          players: updatedPlayers,
          phase: 'selectingCategory',
          validDestinations: {},
          isFinalQuestion: hasAllWedges,
          statusMessage: hasAllWedges
            ? '¡Tienes todos los quesitos! Elige la categoría de la pregunta final.'
            : 'Estás en el centro. Elige una categoría.',
        };
      }

      const question = getRandomQuestion(node.category!, state.usedQuestionIds);
      if (!question) {
        const nextIdx = (state.currentPlayerIndex + 1) % state.players.length;
        return {
          ...state,
          players: updatedPlayers,
          phase: 'rolling',
          currentPlayerIndex: nextIdx,
          validDestinations: {},
          dieValue: null,
          statusMessage: 'No hay preguntas disponibles. Siguiente turno.',
        };
      }

      return {
        ...state,
        players: updatedPlayers,
        phase: 'answering',
        currentQuestion: question,
        selectedCategory: node.category,
        validDestinations: {},
        isFinalQuestion: false,
        statusMessage: `Categoría: ${CATEGORY_NAMES[node.category!]}`,
      };
    }

    case 'SELECT_CATEGORY': {
      const question = getRandomQuestion(action.category, state.usedQuestionIds);
      if (!question) return state;
      return {
        ...state,
        phase: 'answering',
        currentQuestion: question,
        selectedCategory: action.category,
        statusMessage: `Categoría: ${CATEGORY_NAMES[action.category]}`,
      };
    }

    case 'ANSWER_QUESTION': {
      const correct = action.answerIndex === state.currentQuestion!.correctIndex;
      const node = NODES[state.players[state.currentPlayerIndex].position];
      let updatedPlayers = state.players;
      let message: string;

      if (correct) {
        if (state.isFinalQuestion) {
          return {
            ...state,
            phase: 'victory',
            lastAnswerCorrect: true,
            usedQuestionIds: [...state.usedQuestionIds, state.currentQuestion!.id],
            statusMessage: `¡${state.players[state.currentPlayerIndex].name} ha ganado la partida!`,
          };
        }
        if (node.type === 'wedge' && node.category !== null) {
          updatedPlayers = state.players.map((p, i) => {
            if (i !== state.currentPlayerIndex) return p;
            const newWedges = [...p.wedges];
            newWedges[node.category!] = true;
            return { ...p, wedges: newWedges };
          });
          message = `¡Correcto! Has ganado el quesito de ${CATEGORY_NAMES[node.category]}. Vuelve a tirar.`;
        } else {
          message = '¡Correcto! Vuelve a tirar.';
        }
      } else {
        message = `Incorrecto. La respuesta correcta era: ${state.currentQuestion!.options[state.currentQuestion!.correctIndex]}`;
      }

      return {
        ...state,
        phase: 'feedback',
        players: updatedPlayers,
        lastAnswerCorrect: correct,
        usedQuestionIds: [...state.usedQuestionIds, state.currentQuestion!.id],
        statusMessage: message,
      };
    }

    case 'DISMISS_FEEDBACK': {
      if (state.lastAnswerCorrect) {
        return {
          ...state,
          phase: 'rolling',
          currentQuestion: null,
          lastAnswerCorrect: null,
          dieValue: null,
          selectedCategory: null,
          isFinalQuestion: false,
          statusMessage: `Turno de ${state.players[state.currentPlayerIndex].name}. Vuelve a tirar.`,
        };
      } else {
        const nextIdx = (state.currentPlayerIndex + 1) % state.players.length;
        return {
          ...state,
          phase: 'rolling',
          currentPlayerIndex: nextIdx,
          currentQuestion: null,
          lastAnswerCorrect: null,
          dieValue: null,
          selectedCategory: null,
          isFinalQuestion: false,
          statusMessage: `Turno de ${state.players[nextIdx].name}. Tira el dado.`,
        };
      }
    }

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    startGame: useCallback((names: string[]) => dispatch({ type: 'START_GAME', names }), []),
    rollDie: useCallback(() => dispatch({ type: 'ROLL_DIE' }), []),
    selectDestination: useCallback((nodeId: number) => dispatch({ type: 'SELECT_DESTINATION', nodeId }), []),
    selectCategory: useCallback((cat: number) => dispatch({ type: 'SELECT_CATEGORY', category: cat }), []),
    answerQuestion: useCallback((idx: number) => dispatch({ type: 'ANSWER_QUESTION', answerIndex: idx }), []),
    dismissFeedback: useCallback(() => dispatch({ type: 'DISMISS_FEEDBACK' }), []),
    resetGame: useCallback(() => dispatch({ type: 'RESET' }), []),
  };
}
