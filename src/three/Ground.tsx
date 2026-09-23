import { palette } from "./palette";
import { locations } from "../data/content";

export default function Ground() {
  const ordered = locations.map((l) => l.position);
  const points: [number, number][] = [[0, -2], ...ordered.map((p) => [p[0], p[2]] as [number, number])];

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 2]} receiveShadow>
        <circleGeometry args={[26, 64]} />
        <meshStandardMaterial color={palette.ground} roughness={1} />
      </mesh>

      {points.slice(0, -1).map((p, i) => {
        const next = points[i + 1];
        const dx = next[0] - p[0];
        const dz = next[1] - p[1];
        const length = Math.sqrt(dx * dx + dz * dz);
        const angle = Math.atan2(dx, dz);
        const midX = (p[0] + next[0]) / 2;
        const midZ = (p[1] + next[1]) / 2;
        return (
          <mesh key={i} rotation={[-Math.PI / 2, 0, -angle]} position={[midX, 0.01, midZ]} receiveShadow>
            <planeGeometry args={[1.6, length]} />
            <meshStandardMaterial color={palette.path} roughness={0.95} />
          </mesh>
        );
      })}
    </group>
  );
}
