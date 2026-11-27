import { useCallback, useEffect, useReducer } from 'react';
import { CATEGORY_NAMES, NODES, PLAYER_COLORS, findReachableEndpoints } from '../game/board';
import { getRandomQuestion, rememberQuestion } from '../game/questions';
import { GameState, Player } from '../game/types';

import { CLIMATE_MODE } from '../game/climate';

const STORAGE_KEY = (CLIMATE_MODE ? 'climate-' : '') + 'sustainability-quest-es-v3';

const HISTORY_KEY = STORAGE_KEY + '-question-history-v1';
function loadHistory(): number[] {
  if (typeof window === 'undefined') return [];
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(HISTORY_KEY) || '[]');
    return Array.isArray(value) ? value.filter((id): id is number => Number.isInteger(id)) : [];
  } catch { return []; }
}
export const initialState: GameState = {
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
  questionHistory: [],
  statusMessage: '',
  turnNumber: 1,
  newlyEarnedWedge: null,
};

export type GameAction =
  | { type: 'START_GAME'; names: string[]; history?: number[] }
  | { type: 'ROLL_DIE'; forcedValue?: number }
  | { type: 'SELECT_DESTINATION'; nodeId: number }
  | { type: 'SELECT_CATEGORY'; category: number }
  | { type: 'START_FINAL' }
  | { type: 'ANSWER_QUESTION'; answerIndex: number }
  | { type: 'DISMISS_FEEDBACK' }
  | { type: 'RESET' };

function finalQuestionState(state: GameState, players = state.players): GameState {
  const category = Math.floor(Math.random() * 6);
  const question = getRandomQuestion(category, state.usedQuestionIds, state.questionHistory ?? [], 'advanced');
  if (!question) return state;

  return {
    ...state,
    players,
    phase: 'answering',
    currentQuestion: question,
    selectedCategory: category,
    validDestinations: {},
    isFinalQuestion: true,
    newlyEarnedWedge: null,
    statusMessage: `Reto final: ${CATEGORY_NAMES[category]}`,
  };
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME': {
      const players: Player[] = action.names.map((name, index) => ({
        id: index,
        name,
        color: PLAYER_COLORS[index],
        position: 0,
        wedges: [false, false, false, false, false, false],
        score: 0,
        correctAnswers: 0,
        totalAnswers: 0,
      }));

      return {
        ...initialState,
        questionHistory: action.history ?? state.questionHistory ?? [],
        phase: 'rolling',
        players,
        statusMessage: `Turno de ${players[0].name}. Tira el dado y elige una ruta.`,
      };
    }

    case 'ROLL_DIE': {
      if (state.phase !== 'rolling') return state;
      const dieValue = action.forcedValue ?? Math.floor(Math.random() * 6) + 1;
      const player = state.players[state.currentPlayerIndex];
      const validDestinations = findReachableEndpoints(player.position, dieValue);

      return {
        ...state,
        phase: 'selectingMove',
        dieValue,
        validDestinations,
        newlyEarnedWedge: null,
        statusMessage: `Has sacado ${dieValue}. Los destinos posibles están iluminados: elige uno.`,
      };
    }

    case 'SELECT_DESTINATION': {
      if (!state.validDestinations[action.nodeId]) return state;
      const node = NODES[action.nodeId];
      const players = state.players.map((player, index) =>
        index === state.currentPlayerIndex ? { ...player, position: action.nodeId } : player,
      );

      if (node.type === 'rollAgain') {
        return {
          ...state,
          players,
          phase: 'rolling',
          dieValue: null,
          validDestinations: {},
          statusMessage: 'Has llegado a una casilla de impulso. Vuelve a tirar.',
        };
      }

      if (node.type === 'center') {
        const hasAllWedges = players[state.currentPlayerIndex].wedges.every(Boolean);
        if (hasAllWedges) return finalQuestionState(state, players);

        return {
          ...state,
          players,
          phase: 'selectingCategory',
          validDestinations: {},
          dieValue: null,
          isFinalQuestion: false,
          statusMessage: 'Centro de misión: elige la categoría que quieres responder.',
        };
      }

      const question = getRandomQuestion(node.category!, state.usedQuestionIds, state.questionHistory ?? []);
      if (!question) return state;

      return {
        ...state,
        players,
        phase: 'answering',
        currentQuestion: question,
        selectedCategory: node.category,
        validDestinations: {},
        isFinalQuestion: false,
        statusMessage: `Categoría: ${CATEGORY_NAMES[node.category!]}`,
      };
    }

    case 'SELECT_CATEGORY': {
      if (state.phase !== 'selectingCategory') return state;
      const question = getRandomQuestion(action.category, state.usedQuestionIds, state.questionHistory ?? []);
      if (!question) return state;

      return {
        ...state,
        phase: 'answering',
        currentQuestion: question,
        selectedCategory: action.category,
        statusMessage: `Categoría: ${CATEGORY_NAMES[action.category]}`,
      };
    }

    case 'START_FINAL': {
      const player = state.players[state.currentPlayerIndex];
      if (state.phase !== 'rolling' || player.position !== 0 || !player.wedges.every(Boolean)) return state;
      return finalQuestionState(state);
    }

    case 'ANSWER_QUESTION': {
      if (!state.currentQuestion || state.phase !== 'answering') return state;
      const correct = action.answerIndex === state.currentQuestion.correctIndex;
      const currentNode = NODES[state.players[state.currentPlayerIndex].position];
      const earnsNewWedge = correct
        && !state.isFinalQuestion
        && currentNode.type === 'wedge'
        && currentNode.category !== null
        && !state.players[state.currentPlayerIndex].wedges[currentNode.category];

      const players = state.players.map((player, index) => {
        if (index !== state.currentPlayerIndex) return player;
        const wedges = [...player.wedges];
        if (earnsNewWedge) wedges[currentNode.category!] = true;
        return {
          ...player,
          wedges,
          totalAnswers: player.totalAnswers + 1,
          correctAnswers: player.correctAnswers + (correct ? 1 : 0),
          score: player.score + (correct ? (state.isFinalQuestion ? 500 : earnsNewWedge ? 300 : 100) : 0),
        };
      });

      const usedQuestionIds = [...state.usedQuestionIds, state.currentQuestion.id];
      const questionHistory = rememberQuestion(state.questionHistory ?? [], state.currentQuestion.id);

      if (correct && state.isFinalQuestion) {
        return {
          ...state,
          players,
          phase: 'victory',
          lastAnswerCorrect: true,
          usedQuestionIds,
          questionHistory,
          statusMessage: `${players[state.currentPlayerIndex].name} ha completado las seis áreas y el reto final.`,
        };
      }

      let statusMessage: string;
      if (correct && earnsNewWedge) {
        const completed = players[state.currentPlayerIndex].wedges.every(Boolean);
        statusMessage = completed
          ? `Insignia conseguida. Ya tienes las seis: alcanza el centro para afrontar el reto final.`
          : `Insignia conseguida: ${CATEGORY_NAMES[currentNode.category!]}. Conservas el turno.`;
      } else if (correct) {
        statusMessage = 'Respuesta correcta. Sumas 100 puntos y conservas el turno.';
      } else if (state.isFinalQuestion) {
        statusMessage = 'El reto final no está superado. Podrás intentarlo de nuevo en tu próximo turno.';
      } else {
        statusMessage = 'Respuesta incorrecta. El turno pasa al siguiente jugador.';
      }

      return {
        ...state,
        players,
        phase: 'feedback',
        lastAnswerCorrect: correct,
        usedQuestionIds,
        questionHistory,
        statusMessage,
        newlyEarnedWedge: earnsNewWedge ? currentNode.category : null,
      };
    }

    case 'DISMISS_FEEDBACK': {
      const keepTurn = state.lastAnswerCorrect && !state.isFinalQuestion;
      const nextIndex = keepTurn
        ? state.currentPlayerIndex
        : (state.currentPlayerIndex + 1) % state.players.length;
      const nextPlayer = state.players[nextIndex];
      const finalReady = nextPlayer.position === 0 && nextPlayer.wedges.every(Boolean);

      return {
        ...state,
        phase: 'rolling',
        currentPlayerIndex: nextIndex,
        currentQuestion: null,
        lastAnswerCorrect: null,
        dieValue: null,
        selectedCategory: null,
        isFinalQuestion: false,
        newlyEarnedWedge: null,
        turnNumber: state.turnNumber + 1,
        statusMessage: finalReady
          ? `Turno de ${nextPlayer.name}. El reto final está disponible en el centro.`
          : keepTurn
            ? `${nextPlayer.name} conserva el turno. Vuelve a tirar.`
            : state.players.length === 1
              ? 'Nueva ronda. Tira el dado para continuar.'
              : `Turno de ${nextPlayer.name}. Tira el dado.`,
      };
    }

    case 'RESET':
      return {...initialState, questionHistory: state.questionHistory ?? []};

    default:
      return state;
  }
}

function loadState(): GameState {
  if (typeof window === 'undefined') return initialState;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return initialState;
    const parsed = JSON.parse(saved) as GameState;
    if (!Array.isArray(parsed.players) || parsed.players.length === 0) return initialState;
    return {...parsed, questionHistory: parsed.questionHistory ?? loadHistory()};
  } catch {
    return initialState;
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(gameReducer, initialState, loadState);

  useEffect(() => {
    if (state.questionHistory?.length) window.localStorage.setItem(HISTORY_KEY, JSON.stringify(state.questionHistory));
    if (state.phase === 'setup') {
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  return {
    state,
    startGame: useCallback((names: string[]) => dispatch({ type: 'START_GAME', names, history: loadHistory() }), []),
    rollDie: useCallback(() => dispatch({ type: 'ROLL_DIE' }), []),
    selectDestination: useCallback((nodeId: number) => dispatch({ type: 'SELECT_DESTINATION', nodeId }), []),
    selectCategory: useCallback((category: number) => dispatch({ type: 'SELECT_CATEGORY', category }), []),
    startFinal: useCallback(() => dispatch({ type: 'START_FINAL' }), []),
    answerQuestion: useCallback((answerIndex: number) => dispatch({ type: 'ANSWER_QUESTION', answerIndex }), []),
    dismissFeedback: useCallback(() => dispatch({ type: 'DISMISS_FEEDBACK' }), []),
    resetGame: useCallback(() => dispatch({ type: 'RESET' }), []),
  };
}
