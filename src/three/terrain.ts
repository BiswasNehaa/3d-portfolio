import { locations } from "../data/content";

export type FlattenPoint = { x: number; z: number; radius: number };

function hash(x: number, z: number) {
  const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

function valueNoise(x: number, z: number) {
  const xi = Math.floor(x);
  const zi = Math.floor(z);
  const xf = x - xi;
  const zf = z - zi;
  const a = hash(xi, zi);
  const b = hash(xi + 1, zi);
  const c = hash(xi, zi + 1);
  const d = hash(xi + 1, zi + 1);
  const u = xf * xf * (3 - 2 * xf);
  const v = zf * zf * (3 - 2 * zf);
  return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v;
}

function baseHeight(x: number, z: number): number {
  const large = valueNoise(x * 0.045, z * 0.045) * 2.6;
  const mid = valueNoise(x * 0.11 + 40, z * 0.11 + 40) * 0.9;
  const small = valueNoise(x * 0.3 + 90, z * 0.3 + 90) * 0.22;
  return large + mid + small - 1.6;
}

function smoothstep(t: number) {
  const c = Math.min(Math.max(t, 0), 1);
  return c * c * (3 - 2 * c);
}

export const START = { x: 2, z: 14 };
export const POND = { x: 6, z: -1 };

export const FLATTEN_POINTS: FlattenPoint[] = (() => {
  const points: FlattenPoint[] = locations.map((l) => ({ x: l.position[0], z: l.position[2], radius: 4.6 }));
  const route = [START, ...locations.map((l) => ({ x: l.position[0], z: l.position[2] }))];
  for (let i = 0; i < route.length - 1; i++) {
    const a = route[i];
    const b = route[i + 1];
    const steps = 10;
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      points.push({ x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t, radius: 2.1 });
    }
  }
  points.push({ x: POND.x, z: POND.z, radius: 3.4 });
  return points;
})();

export const ROUTE_POINTS = [START, ...locations.map((l) => ({ x: l.position[0], z: l.position[2] }))];

export function terrainHeightAt(x: number, z: number): number {
  let result = baseHeight(x, z);
  for (const p of FLATTEN_POINTS) {
    const d = Math.hypot(x - p.x, z - p.z);
    if (d < p.radius) {
      const t = smoothstep(1 - d / p.radius);
      const plateau = baseHeight(p.x, p.z);
      result = result * (1 - t) + plateau * t;
    }
  }
  return result * 1.15;
}
