import { palette } from "../palette";

export default function Archive() {
  const drawers = [
    { y: 0.5, color: palette.wallCream },
    { y: 1.35, color: palette.wallIvory },
    { y: 2.2, color: palette.wallCream },
  ];
  return (
    <group>
      {drawers.map((d, i) => (
        <group key={i}>
          <mesh position={[0, d.y, 0]} castShadow receiveShadow>
            <boxGeometry args={[2.9 - i * 0.12, 0.8, 2.1 - i * 0.1]} />
            <meshStandardMaterial color={d.color} roughness={0.85} />
          </mesh>
          <mesh position={[0, d.y - 0.02, (2.1 - i * 0.1) / 2 + 0.01]}>
            <boxGeometry args={[2.6 - i * 0.12, 0.08, 0.02]} />
            <meshStandardMaterial color={palette.wallCharcoal} roughness={0.9} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 2.65, 0]}>
        <boxGeometry args={[2.9, 0.08, 2.1]} />
        <meshStandardMaterial color={palette.roofCharcoal} />
      </mesh>
    </group>
  );
}
