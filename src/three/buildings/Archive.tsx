import { palette } from "../palette";

export default function Archive() {
  const drawers = [
    { y: 0.5, color: palette.wallStone, depth: 2.15 },
    { y: 1.35, color: palette.wallCream, depth: 2.0 },
    { y: 2.15, color: palette.wallStone, depth: 1.8 },
  ];
  return (
    <group>
      {drawers.map((d, i) => (
        <group key={i}>
          <mesh position={[0, d.y, 0]} castShadow receiveShadow>
            <boxGeometry args={[2.95 - i * 0.14, 0.78, d.depth]} />
            <meshStandardMaterial color={d.color} roughness={0.85} />
          </mesh>
          {[-0.7, 0, 0.7].map((x, j) => (
            <mesh key={j} position={[x * (1 - i * 0.05), d.y - 0.04, d.depth / 2 + 0.01]}>
              <boxGeometry args={[0.5, 0.06, 0.02]} />
              <meshStandardMaterial color={palette.wallCharcoal} roughness={0.7} />
            </mesh>
          ))}
        </group>
      ))}
      <mesh position={[0, 2.65, 0]}>
        <boxGeometry args={[3.0, 0.1, 2.2]} />
        <meshStandardMaterial color={palette.roofCharcoal} />
      </mesh>
      {/* reading nook / entrance glass */}
      <mesh position={[0, 0.6, 1.09]}>
        <boxGeometry args={[0.85, 1.0, 0.03]} />
        <meshPhysicalMaterial color={palette.glass} emissive={palette.glassWarm} emissiveIntensity={0.4} roughness={0.15} transparent opacity={0.85} />
      </mesh>
      {/* small overhang */}
      <mesh position={[0, 1.15, 1.25]}>
        <boxGeometry args={[1.1, 0.05, 0.4]} />
        <meshStandardMaterial color={palette.accentBrass} roughness={0.5} metalness={0.3} />
      </mesh>
    </group>
  );
}
