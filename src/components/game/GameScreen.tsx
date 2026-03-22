import { useState } from 'react';
import { GameState } from '@/game/types';
import { CATEGORY_COLORS, CATEGORY_NAMES, NODES } from '@/game/board';
import Board from './Board';
import QuestionModal from './QuestionModal';

interface GameScreenProps {
  state: GameState;
  rollDie: () => void;
  selectDestination: (nodeId: number) => void;
  selectCategory: (cat: number) => void;
  answerQuestion: (idx: number) => void;
  dismissFeedback: () => void;
}

function WedgePie({ wedges, size = 48 }: { wedges: boolean[]; size?: number }) {
  const r = size / 2 - 3;
  const cx = size / 2;
  const cy = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {wedges.map((earned, i) => {
        const a1 = ((i * 60 - 90) * Math.PI) / 180;
        const a2 = (((i + 1) * 60 - 90) * Math.PI) / 180;
        return (
          <path
            key={i}
            d={`M${cx},${cy} L${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)} A${r},${r} 0 0,1 ${cx + r * Math.cos(a2)},${cy + r * Math.sin(a2)} Z`}
            fill={earned ? CATEGORY_COLORS[i] : 'rgba(255,255,255,0.08)'}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth={0.8}
          />
        );
      })}
    </svg>
  );
}

function DieFace({ value, rolling }: { value: number | null; rolling: boolean }) {
  const dots: Record<number, [number, number][]> = {
    1: [[25, 25]],
    2: [[12, 12], [38, 38]],
    3: [[12, 12], [25, 25], [38, 38]],
    4: [[12, 12], [38, 12], [12, 38], [38, 38]],
    5: [[12, 12], [38, 12], [25, 25], [12, 38], [38, 38]],
    6: [[12, 12], [38, 12], [12, 25], [38, 25], [12, 38], [38, 38]],
  };
  const d = value && dots[value] ? dots[value] : [];

  return (
    <div className={`inline-block ${rolling ? 'animate-die-shake' : ''}`}>
      <svg width={72} height={72} viewBox="0 0 50 50">
        <rect x={1} y={1} width={48} height={48} rx={8} fill="hsl(0,0%,95%)" stroke="hsl(0,0%,80%)" strokeWidth={1.5} />
        {d.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={4} fill="hsl(230,25%,15%)" />
        ))}
      </svg>
    </div>
  );
}

export default function GameScreen({
  state,
  rollDie,
  selectDestination,
  selectCategory,
  answerQuestion,
  dismissFeedback,
}: GameScreenProps) {
  const [isRolling, setIsRolling] = useState(false);
  const currentPlayer = state.players[state.currentPlayerIndex];
  const currentNode = currentPlayer ? NODES[currentPlayer.position] : null;

  const handleRoll = () => {
    if (isRolling) return;
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
      rollDie();
    }, 600);
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Panel - Players */}
      <div className="w-56 flex-shrink-0 p-4 flex flex-col gap-3 overflow-y-auto border-r border-border bg-card/50">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Jugadores</h2>
        {state.players.map((player, i) => {
          const isCurrent = i === state.currentPlayerIndex;
          return (
            <div
              key={player.id}
              className={`rounded-lg p-3 transition-all duration-200 ${
                isCurrent ? 'bg-secondary ring-1 ring-primary/40' : 'bg-card'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-5 h-5 rounded-full flex-shrink-0 border border-white/20"
                  style={{ backgroundColor: player.color }}
                />
                <span className={`text-sm font-semibold truncate ${isCurrent ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {player.name}
                </span>
                {isCurrent && <span className="ml-auto text-[10px] text-primary font-bold">▶</span>}
              </div>
              <WedgePie wedges={player.wedges} />
            </div>
          );
        })}
      </div>

      {/* Center - Board */}
      <div className="flex-1 flex items-center justify-center p-4 min-w-0">
        <Board
          players={state.players}
          validDestinations={state.validDestinations}
          onSelectDestination={selectDestination}
          phase={state.phase}
        />
      </div>

      {/* Right Panel - Game Info */}
      <div className="w-64 flex-shrink-0 p-4 flex flex-col gap-4 overflow-y-auto border-l border-border bg-card/50">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Turno actual</h2>

        {currentPlayer && (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: currentPlayer.color }} />
            <span className="font-bold">{currentPlayer.name}</span>
          </div>
        )}

        {/* Die */}
        <div className="flex flex-col items-center gap-3 py-4">
          <DieFace value={isRolling ? Math.ceil(Math.random() * 6) : state.dieValue} rolling={isRolling} />
          {state.dieValue !== null && !isRolling && (
            <span className="text-2xl font-bold">{state.dieValue}</span>
          )}
          {state.phase === 'rolling' && (
            <button
              onClick={handleRoll}
              disabled={isRolling}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold transition-all duration-200 hover:brightness-110 active:scale-[0.98] disabled:opacity-50 shadow-lg game-glow"
            >
              🎲 Tirar dado
            </button>
          )}
        </div>

        {/* Status */}
        <div className="bg-secondary rounded-lg p-3">
          <p className="text-sm leading-relaxed">{state.statusMessage}</p>
        </div>

        {/* Current position info */}
        {currentNode && (
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Casilla</span>
              <span className="font-medium text-foreground">
                {currentNode.type === 'center'
                  ? 'Centro'
                  : currentNode.type === 'wedge'
                  ? `Quesito (${CATEGORY_NAMES[currentNode.category!]})`
                  : currentNode.type === 'rollAgain'
                  ? 'Vuelve a tirar'
                  : CATEGORY_NAMES[currentNode.category!]}
              </span>
            </div>
            {currentNode.category !== null && (
              <div className="flex items-center justify-between">
                <span>Categoría</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[currentNode.category] }} />
                  <span className="font-medium text-foreground">{CATEGORY_NAMES[currentNode.category]}</span>
                </div>
              </div>
            )}
            <div className="flex justify-between">
              <span>Quesitos</span>
              <span className="font-medium text-foreground">
                {currentPlayer.wedges.filter(Boolean).length}/6
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Category Selection Modal */}
      {state.phase === 'selectingCategory' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="game-panel p-6 max-w-sm w-full animate-slide-in">
            <h2 className="text-lg font-bold mb-4">
              {state.isFinalQuestion ? 'Pregunta Final' : 'Elige una categoría'}
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORY_NAMES.map((name, i) => (
                <button
                  key={i}
                  onClick={() => selectCategory(i)}
                  className="flex items-center gap-2 px-3 py-3 rounded-lg transition-all duration-150 active:scale-[0.97] hover:brightness-110"
                  style={{ backgroundColor: CATEGORY_COLORS[i] + '33', borderColor: CATEGORY_COLORS[i], borderWidth: 1 }}
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[i] }} />
                  <span className="text-sm font-semibold">{name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Question Modal */}
      {state.phase === 'answering' && state.currentQuestion && state.selectedCategory !== null && (
        <QuestionModal
          question={state.currentQuestion}
          category={state.selectedCategory}
          isFinal={state.isFinalQuestion}
          onAnswer={answerQuestion}
        />
      )}

      {/* Feedback Modal */}
      {state.phase === 'feedback' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="game-panel p-6 max-w-sm w-full text-center animate-slide-in">
            <div className="text-5xl mb-4">{state.lastAnswerCorrect ? '✅' : '❌'}</div>
            <p className="text-base mb-6 leading-relaxed">{state.statusMessage}</p>
            <button
              onClick={dismissFeedback}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
