import { BoardNode } from './types';

export const CX = 300;
export const CY = 300;
export const RING_R = 220;
const SPOKE_RADII = [75, 130, 175];

export const CATEGORY_COLORS = [
  '#22c55e', // Especies
  '#3b82f6', // Ecosistemas
  '#14b8a6', // Soluciones
  '#eab308', // Indicadores
  '#ec4899', // Amenazas
  '#06b6d4', // Airbus
];

export const CATEGORY_NAMES = [
  'Especies',
  'Ecosistemas',
  'Soluciones',
  'Indicadores',
  'Amenazas',
  'Airbus',
];

export const PLAYER_COLORS = ['#ef4444', '#a855f7', '#f97316', '#84cc16'];

function degToRad(d: number) {
  return (d * Math.PI) / 180;
}

export function spokeAngleDeg(i: number) {
  return i * 60 - 90;
}

function buildNodes(): BoardNode[] {
  const nodes: BoardNode[] = [];

  // 0: Center
  nodes.push({ id: 0, type: 'center', category: null, x: CX, y: CY });

  // 1-18: Spoke nodes (6 spokes × 3)
  for (let i = 0; i < 6; i++) {
    const angle = degToRad(spokeAngleDeg(i));
    for (let j = 0; j < 3; j++) {
      const r = SPOKE_RADII[j];
      nodes.push({
        id: 1 + i * 3 + j,
        type: 'normal',
        category: i,
        x: CX + r * Math.cos(angle),
        y: CY + r * Math.sin(angle),
      });
    }
  }

  // 19-24: Quesito nodes
  for (let i = 0; i < 6; i++) {
    const angle = degToRad(spokeAngleDeg(i));
    nodes.push({
      id: 19 + i,
      type: 'wedge',
      category: i,
      x: CX + RING_R * Math.cos(angle),
      y: CY + RING_R * Math.sin(angle),
    });
  }

  // 25-42: Ring nodes (6 segments × 3)
  for (let i = 0; i < 6; i++) {
    const startAngle = spokeAngleDeg(i);
    for (let k = 0; k < 3; k++) {
      const t = (k + 1) / 4;
      const angle = degToRad(startAngle + t * 60);
      const isRollAgain = k === 1;
      const category = isRollAgain ? null : k === 0 ? i : (i + 1) % 6;
      nodes.push({
        id: 25 + i * 3 + k,
        type: isRollAgain ? 'rollAgain' : 'normal',
        category,
        x: CX + RING_R * Math.cos(angle),
        y: CY + RING_R * Math.sin(angle),
      });
    }
  }

  return nodes;
}

function buildAdjacency(): number[][] {
  const adj: number[][] = Array.from({ length: 43 }, () => []);
  const connect = (a: number, b: number) => {
    adj[a].push(b);
    adj[b].push(a);
  };

  for (let i = 0; i < 6; i++) {
    connect(0, 1 + i * 3);
  }

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 2; j++) {
      connect(1 + i * 3 + j, 1 + i * 3 + j + 1);
    }
    connect(1 + i * 3 + 2, 19 + i);
  }

  for (let i = 0; i < 6; i++) {
    connect(19 + i, 25 + i * 3);
    for (let k = 0; k < 2; k++) {
      connect(25 + i * 3 + k, 25 + i * 3 + k + 1);
    }
    connect(25 + i * 3 + 2, 19 + (i + 1) % 6);
  }

  return adj;
}

export const NODES = buildNodes();
export const ADJACENCY = buildAdjacency();

export function findReachableEndpoints(
  start: number,
  steps: number
): Record<number, number[]> {
  const result: Record<number, number[]> = {};

  function dfs(node: number, prev: number, remaining: number, path: number[]) {
    if (remaining === 0) {
      if (!(node in result)) {
        result[node] = path;
      }
      return;
    }
    for (const neighbor of ADJACENCY[node]) {
      if (neighbor !== prev) {
        dfs(neighbor, node, remaining - 1, [...path, neighbor]);
      }
    }
  }

  dfs(start, -1, steps, [start]);
  return result;
}
