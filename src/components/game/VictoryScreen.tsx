import { Player } from '@/game/types';
import { CATEGORY_COLORS } from '@/game/board';

interface VictoryScreenProps {
  winner: Player;
  onPlayAgain: () => void;
}

function WedgePie({ wedges, size = 80 }: { wedges: boolean[]; size?: number }) {
  const r = size / 2 - 4;
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
            fill={earned ? CATEGORY_COLORS[i] : 'rgba(255,255,255,0.1)'}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth={1}
          />
        );
      })}
    </svg>
  );
}

export default function VictoryScreen({ winner, onPlayAgain }: VictoryScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="game-panel p-10 max-w-md w-full text-center animate-fade-in-up">
        <div className="text-6xl mb-4">🏆</div>
        <h1 className="text-3xl font-bold mb-2">¡Victoria!</h1>
        <p className="text-xl text-muted-foreground mb-6">
          <span style={{ color: winner.color }} className="font-bold">{winner.name}</span>{' '}
          ha ganado la partida
        </p>
        <div className="flex justify-center mb-8">
          <WedgePie wedges={winner.wedges} size={100} />
        </div>
        <button
          onClick={onPlayAgain}
          className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98] shadow-lg game-glow"
        >
          Jugar de nuevo
        </button>
      </div>
    </div>
  );
}
