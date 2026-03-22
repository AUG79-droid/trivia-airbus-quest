import { useState } from 'react';
import { PLAYER_COLORS, CATEGORY_COLORS, CATEGORY_NAMES } from '@/game/board';

interface SetupScreenProps {
  onStart: (names: string[]) => void;
}

export default function SetupScreen({ onStart }: SetupScreenProps) {
  const [count, setCount] = useState(2);
  const [names, setNames] = useState(['Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4']);

  const handleStart = () => {
    const playerNames = names.slice(0, count).map((n, i) => n.trim() || `Jugador ${i + 1}`);
    onStart(playerNames);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="game-panel p-8 max-w-lg w-full animate-fade-in-up">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">
            <span className="text-primary">Biodiver</span>
            <span className="text-foreground">Trivial</span>
          </h1>
          <p className="text-lg text-muted-foreground">Airbus Edition</p>
        </div>

        {/* Category preview */}
        <div className="flex justify-center gap-2 mb-8">
          {CATEGORY_NAMES.map((name, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className="w-6 h-6 rounded-full border border-white/20"
                style={{ backgroundColor: CATEGORY_COLORS[i] }}
              />
              <span className="text-[10px] text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Número de jugadores
          </label>
          <div className="flex gap-2">
            {[2, 3, 4].map(n => (
              <button
                key={n}
                onClick={() => setCount(n)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95 ${
                  count === n
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex-shrink-0 border-2 border-white/20"
                style={{ backgroundColor: PLAYER_COLORS[i] }}
              />
              <input
                type="text"
                value={names[i]}
                onChange={e => {
                  const next = [...names];
                  next[i] = e.target.value;
                  setNames(next);
                }}
                className="flex-1 bg-input border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder={`Jugador ${i + 1}`}
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleStart}
          className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98] shadow-lg game-glow"
        >
          ¡Comenzar partida!
        </button>
      </div>
    </div>
  );
}
