import { palette } from "../palette";

export default function University() {
  const columnXs = [-1.1, -0.55, 0.55, 1.1];
  return (
    <group>
      <mesh position={[0, 1.1, -0.3]} castShadow receiveShadow>
        <boxGeometry args={[3.4, 2.2, 2]} />
        <meshStandardMaterial color={palette.wallCream} roughness={0.85} />
      </mesh>
      <mesh position={[0, 2.35, -0.3]}>
        <coneGeometry args={[2.1, 0.75, 3]} />
        <meshStandardMaterial color={palette.accentOrange} roughness={0.65} />
      </mesh>
      {columnXs.map((x, i) => (
        <mesh key={i} position={[x, 0.85, 0.85]} castShadow>
          <cylinderGeometry args={[0.11, 0.13, 1.7, 10]} />
          <meshStandardMaterial color={palette.wallIvory} roughness={0.7} />
        </mesh>
      ))}
      <mesh position={[0, 0.05, 0.5]}>
        <boxGeometry args={[3.6, 0.12, 1.2]} />
        <meshStandardMaterial color={palette.wallCharcoal} roughness={0.8} />
      </mesh>
    </group>
  );
}
