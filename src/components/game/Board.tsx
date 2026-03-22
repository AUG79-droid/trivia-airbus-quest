import { BoardNode, Player } from '@/game/types';
import { NODES, CATEGORY_COLORS, CX, CY, RING_R, spokeAngleDeg, ADJACENCY } from '@/game/board';

interface BoardProps {
  players: Player[];
  validDestinations: Record<number, number[]>;
  onSelectDestination: (nodeId: number) => void;
  phase: string;
}

function degToRad(d: number) {
  return (d * Math.PI) / 180;
}

function RollAgainIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <path
        d="M-5,-2 A5,5 0 1,1 -2,5 M-2,5 L-4,3 M-2,5 L0,3"
        fill="none"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </g>
  );
}

export default function Board({ players, validDestinations, onSelectDestination, phase }: BoardProps) {
  const isSelecting = phase === 'selectingMove';
  const validIds = new Set(Object.keys(validDestinations).map(Number));

  // Compute player offsets for stacking
  const positionPlayers: Record<number, Player[]> = {};
  players.forEach(p => {
    if (!positionPlayers[p.position]) positionPlayers[p.position] = [];
    positionPlayers[p.position].push(p);
  });

  return (
    <svg viewBox="0 0 600 600" className="w-full h-full max-w-[600px] max-h-[600px]">
      {/* Background */}
      <defs>
        <radialGradient id="bg-grad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="hsl(230,20%,16%)" />
          <stop offset="100%" stopColor="hsl(230,25%,8%)" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x={0} y={0} width={600} height={600} fill="url(#bg-grad)" rx={16} />

      {/* Ring circle */}
      <circle cx={CX} cy={CY} r={RING_R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={28} />

      {/* Spoke lines */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = degToRad(spokeAngleDeg(i));
        return (
          <line
            key={`spoke-${i}`}
            x1={CX + 35 * Math.cos(angle)}
            y1={CY + 35 * Math.sin(angle)}
            x2={CX + (RING_R - 14) * Math.cos(angle)}
            y2={CY + (RING_R - 14) * Math.sin(angle)}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={8}
            strokeLinecap="round"
          />
        );
      })}

      {/* Center hub */}
      <circle cx={CX} cy={CY} r={30} fill="hsl(230,20%,18%)" stroke="rgba(255,255,255,0.2)" strokeWidth={2} />
      {/* Center pie segments */}
      {Array.from({ length: 6 }).map((_, i) => {
        const a1 = degToRad(i * 60 - 90);
        const a2 = degToRad((i + 1) * 60 - 90);
        const r = 26;
        return (
          <path
            key={`center-seg-${i}`}
            d={`M${CX},${CY} L${CX + r * Math.cos(a1)},${CY + r * Math.sin(a1)} A${r},${r} 0 0,1 ${CX + r * Math.cos(a2)},${CY + r * Math.sin(a2)} Z`}
            fill={CATEGORY_COLORS[i]}
            opacity={0.3}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth={0.5}
          />
        );
      })}

      {/* Valid destination highlight */}
      {isSelecting &&
        Object.keys(validDestinations).map(idStr => {
          const id = Number(idStr);
          const node = NODES[id];
          if (id === 0) {
            return (
              <circle
                key={`valid-${id}`}
                cx={CX}
                cy={CY}
                r={34}
                fill="none"
                stroke="white"
                strokeWidth={2.5}
                className="animate-pulse-glow"
                style={{ cursor: 'pointer' }}
                onClick={() => onSelectDestination(id)}
              />
            );
          }
          return (
            <circle
              key={`valid-${id}`}
              cx={node.x}
              cy={node.y}
              r={node.type === 'wedge' ? 20 : 17}
              fill="none"
              stroke="white"
              strokeWidth={2.5}
              className="animate-pulse-glow"
              style={{ cursor: 'pointer' }}
              onClick={() => onSelectDestination(id)}
            />
          );
        })}

      {/* Casillas */}
      {NODES.filter(n => n.id !== 0).map(node => {
        const isWedge = node.type === 'wedge';
        const isRA = node.type === 'rollAgain';
        const r = isWedge ? 15 : 12;
        const fill = isRA
          ? 'hsl(230,15%,25%)'
          : node.category !== null
          ? CATEGORY_COLORS[node.category]
          : '#555';
        const isValid = validIds.has(node.id);

        return (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={r}
              fill={fill}
              stroke={isWedge ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)'}
              strokeWidth={isWedge ? 2 : 1}
              style={isValid && isSelecting ? { cursor: 'pointer' } : undefined}
              onClick={isValid && isSelecting ? () => onSelectDestination(node.id) : undefined}
              filter={isWedge ? 'url(#glow)' : undefined}
            />
            {isWedge && (
              <text
                x={node.x}
                y={node.y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize={9}
                fontWeight="bold"
                style={{ pointerEvents: 'none' }}
              >
                ★
              </text>
            )}
            {isRA && <RollAgainIcon x={node.x} y={node.y} />}
          </g>
        );
      })}

      {/* Center clickable area when valid */}
      {isSelecting && validIds.has(0) && (
        <circle
          cx={CX}
          cy={CY}
          r={30}
          fill="transparent"
          style={{ cursor: 'pointer' }}
          onClick={() => onSelectDestination(0)}
        />
      )}

      {/* Player tokens */}
      {players.map(player => {
        const node = NODES[player.position];
        const playersHere = positionPlayers[player.position] || [];
        const idx = playersHere.indexOf(player);
        const total = playersHere.length;
        let ox = 0, oy = 0;
        if (player.position === 0) {
          // Spread around center
          const angle = degToRad(idx * (360 / total) - 90);
          const spread = total > 1 ? 16 : 0;
          ox = spread * Math.cos(angle);
          oy = spread * Math.sin(angle);
        } else if (total > 1) {
          const offsets = [[-6, -6], [6, -6], [-6, 6], [6, 6]];
          ox = offsets[idx]?.[0] ?? 0;
          oy = offsets[idx]?.[1] ?? 0;
        }

        return (
          <g key={player.id}>
            <circle
              cx={node.x + ox}
              cy={node.y + oy}
              r={7}
              fill={player.color}
              stroke="white"
              strokeWidth={2}
              style={{ transition: 'cx 0.4s ease, cy 0.4s ease' }}
            />
            <text
              x={node.x + ox}
              y={node.y + oy + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize={7}
              fontWeight="bold"
              style={{ pointerEvents: 'none' }}
            >
              {player.name[0]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
