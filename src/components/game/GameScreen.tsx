import { useEffect, useRef, useState, type CSSProperties } from 'react';
import {
  CATEGORY_COLORS,
  CATEGORY_NAMES,
  NODES,
  describeNode,
} from '../../game/board';
import { GameState } from '../../game/types';
import Board from './Board';
import QuestionModal from './QuestionModal';

interface GameScreenProps {
  state: GameState;
  rollDie: () => void;
  selectDestination: (nodeId: number) => void;
  selectCategory: (category: number) => void;
  startFinal: () => void;
  answerQuestion: (index: number) => void;
  dismissFeedback: () => void;
  resetGame: () => void;
}

function BadgeWheel({ wedges, size = 54 }: { wedges: boolean[]; size?: number }) {
  const radius = size / 2 - 4;
  const center = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label={`${wedges.filter(Boolean).length} de 6 insignias`}>
      {wedges.map((earned, index) => {
        const first = ((index * 60 - 90) * Math.PI) / 180;
        const second = (((index + 1) * 60 - 90) * Math.PI) / 180;
        return (
          <path
            key={index}
            d={`M${center},${center} L${center + radius * Math.cos(first)},${center + radius * Math.sin(first)} A${radius},${radius} 0 0,1 ${center + radius * Math.cos(second)},${center + radius * Math.sin(second)} Z`}
            fill={earned ? CATEGORY_COLORS[index] : '#173149'}
            stroke="#7895aa"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}

function DieFace({ value, rolling }: { value: number | null; rolling: boolean }) {
  const dots: Record<number, Array<[number, number]>> = {
    1: [[25, 25]],
    2: [[13, 13], [37, 37]],
    3: [[13, 13], [25, 25], [37, 37]],
    4: [[13, 13], [37, 13], [13, 37], [37, 37]],
    5: [[13, 13], [37, 13], [25, 25], [13, 37], [37, 37]],
    6: [[13, 12], [37, 12], [13, 25], [37, 25], [13, 38], [37, 38]],
  };
  return (
    <div className={rolling ? 'die rolling' : 'die'} aria-label={value ? `Dado: ${value}` : 'Dado preparado'}>
      <svg viewBox="0 0 50 50" aria-hidden="true">
        <rect x="1" y="1" width="48" height="48" rx="9" />
        {(value ? dots[value] : []).map(([x, y], index) => <circle key={index} cx={x} cy={y} r="4" />)}
      </svg>
    </div>
  );
}

function RulesModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="rules-title">
      <div className="modal-card rules-card">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Cerrar reglas">×</button>
        <p className="eyebrow">REGLAS DE LA MISIÓN</p>
        <h2 id="rules-title">Cómo avanzar y ganar</h2>
        <ol>
          <li><strong>Tira el dado.</strong> El tablero ilumina todos los destinos alcanzables con esa tirada.</li>
          <li><strong>Elige la ruta.</strong> La ficha recorre cada casilla hasta el destino seleccionado.</li>
          <li><strong>Responde.</strong> Si aciertas, sumas puntos y conservas el turno; si fallas, pasa al siguiente participante.</li>
          <li><strong>Consigue las seis insignias.</strong> Solo se obtienen al acertar en una parada triangular de su categoría.</li>
          <li><strong>Regresa al centro.</strong> Con las seis insignias, responde correctamente al reto final para ganar.</li>
        </ol>
        <div className="rules-note">En modo individual, una respuesta incorrecta inicia una nueva ronda. La partida queda guardada en este navegador.</div>
        <button type="button" className="primary-button" onClick={onClose}>Entendido</button>
      </div>
    </div>
  );
}

export default function GameScreen({
  state,
  rollDie,
  selectDestination,
  selectCategory,
  startFinal,
  answerQuestion,
  dismissFeedback,
  resetGame,
}: GameScreenProps) {
  const [showRules, setShowRules] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [rollingValue, setRollingValue] = useState(1);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const currentPlayer = state.players[state.currentPlayerIndex];
  const currentNode = NODES[currentPlayer.position];
  const canStartFinal = state.phase === 'rolling'
    && currentPlayer.position === 0
    && currentPlayer.wedges.every(Boolean);

  useEffect(() => () => {
    if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
  }, []);

  const handleRoll = () => {
    if (isRolling || state.phase !== 'rolling') return;
    setIsRolling(true);
    intervalRef.current = window.setInterval(() => {
      setRollingValue(Math.floor(Math.random() * 6) + 1);
    }, 75);
    timeoutRef.current = window.setTimeout(() => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRolling(false);
      rollDie();
    }, 650);
  };

  const leaveGame = () => {
    if (window.confirm('¿Quieres abandonar esta partida y borrar su progreso?')) resetGame();
  };

  const ranking = [...state.players].sort((a, b) =>
    b.wedges.filter(Boolean).length - a.wedges.filter(Boolean).length || b.score - a.score,
  );

  return (
    <main className="game-page">
      <header className="game-header">
        <div>
          <span className="header-mark" aria-hidden="true">TAS</span>
          <div><strong>Sustainability Quest</strong><small>Airbus learning challenge</small></div>
        </div>
        <nav aria-label="Controles de partida">
          <button type="button" onClick={() => setShowRules(true)}>Cómo jugar</button>
          <button type="button" onClick={leaveGame}>Salir</button>
        </nav>
      </header>

      <div className="game-layout">
        <aside className="players-panel panel">
          <div className="panel-heading">
            <p className="eyebrow">CLASIFICACIÓN</p>
            <span>Ronda {state.turnNumber}</span>
          </div>
          <div className="ranking-list">
            {ranking.map((player, rank) => (
              <div key={player.id} className={player.id === currentPlayer.id ? 'ranking-row current' : 'ranking-row'}>
                <span className="rank-number">{rank + 1}</span>
                <i style={{ backgroundColor: player.color }} />
                <strong>{player.name}</strong>
                <small>{player.score} pts</small>
              </div>
            ))}
          </div>

          <div className="participants-heading">Participantes</div>
          <div className="participant-list">
            {state.players.map((player, index) => {
              const count = player.wedges.filter(Boolean).length;
              return (
                <article key={player.id} className={index === state.currentPlayerIndex ? 'participant-card active' : 'participant-card'}>
                  <div className="participant-name">
                    <i style={{ backgroundColor: player.color }} />
                    <strong>{player.name}</strong>
                    {index === state.currentPlayerIndex && <span>Turno</span>}
                  </div>
                  <div className="participant-progress">
                    <BadgeWheel wedges={player.wedges} />
                    <div><strong>{count}/6</strong><span>insignias</span><small>{player.correctAnswers}/{player.totalAnswers} aciertos</small></div>
                  </div>
                </article>
              );
            })}
          </div>
        </aside>

        <section className="board-area">
          <div className="mobile-turn"><i style={{ backgroundColor: currentPlayer.color }} /> Turno de <strong>{currentPlayer.name}</strong></div>
          <Board
            players={state.players}
            currentPlayerIndex={state.currentPlayerIndex}
            validDestinations={state.validDestinations}
            onSelectDestination={selectDestination}
            phase={state.phase}
          />
        </section>

        <aside className="control-panel panel">
          <div className="turn-card">
            <p className="eyebrow">TURNO ACTUAL</p>
            <div><i style={{ backgroundColor: currentPlayer.color }} /><strong>{currentPlayer.name}</strong></div>
          </div>

          <div className="dice-zone">
            <DieFace value={isRolling ? rollingValue : state.dieValue} rolling={isRolling} />
            {canStartFinal ? (
              <button type="button" className="final-button" onClick={startFinal}>Iniciar reto final</button>
            ) : state.phase === 'rolling' ? (
              <button type="button" className="primary-button roll-button" disabled={isRolling} onClick={handleRoll}>
                {isRolling ? 'Lanzando…' : 'Tirar el dado'}
              </button>
            ) : state.phase === 'selectingMove' ? (
              <div className="destination-count"><strong>{Object.keys(state.validDestinations).length}</strong><span>rutas posibles</span></div>
            ) : null}
          </div>

          <div className="status-card" aria-live="polite">
            <span>Estado de la misión</span>
            <p>{state.statusMessage}</p>
          </div>

          <dl className="position-details">
            <div><dt>Posición</dt><dd>{describeNode(currentNode)}</dd></div>
            <div><dt>Insignias</dt><dd>{currentPlayer.wedges.filter(Boolean).length}/6</dd></div>
            <div><dt>Puntuación</dt><dd>{currentPlayer.score}</dd></div>
          </dl>

          {state.phase === 'selectingMove' && (
            <div className="route-tip">Pasa el cursor sobre un destino numerado para ver la ruta. En móvil, toca el destino.</div>
          )}
        </aside>
      </div>

      {state.phase === 'selectingCategory' && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="category-title">
          <div className="modal-card category-card">
            <p className="eyebrow">CENTRO DE MISIÓN</p>
            <h2 id="category-title">Elige una categoría</h2>
            <p>En el centro puedes decidir qué conocimiento quieres poner a prueba.</p>
            <div className="category-grid">
              {CATEGORY_NAMES.map((name, index) => (
                <button key={name} type="button" onClick={() => selectCategory(index)} style={{ '--category': CATEGORY_COLORS[index] } as CSSProperties}>
                  <i />{name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {state.phase === 'answering' && state.currentQuestion && state.selectedCategory !== null && (
        <QuestionModal
          question={state.currentQuestion}
          category={state.selectedCategory}
          isFinal={state.isFinalQuestion}
          onAnswer={answerQuestion}
        />
      )}

      {state.phase === 'feedback' && state.currentQuestion && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="feedback-title">
          <div className={state.lastAnswerCorrect ? 'modal-card feedback-card correct' : 'modal-card feedback-card incorrect'}>
            <div className="feedback-symbol">{state.lastAnswerCorrect ? '✓' : '×'}</div>
            <p className="eyebrow">{state.newlyEarnedWedge !== null ? 'NUEVA INSIGNIA' : state.lastAnswerCorrect ? 'RESPUESTA CORRECTA' : 'SIGUE APRENDIENDO'}</p>
            <h2 id="feedback-title">{state.statusMessage}</h2>
            {!state.lastAnswerCorrect && (
              <div className="correct-answer">
                <span>Respuesta correcta</span>
                <strong>{state.currentQuestion.options[state.currentQuestion.correctIndex]}</strong>
              </div>
            )}
            <div className="learning-note">
              <span>Por qué importa</span>
              <p>{state.currentQuestion.explanation}</p>
            </div>
            <button type="button" className="primary-button" onClick={dismissFeedback}>Continuar</button>
          </div>
        </div>
      )}

      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
    </main>
  );
}
