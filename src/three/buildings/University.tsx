import { palette } from "../palette";

export default function University() {
  const columnXs = [-1.15, -0.58, 0.58, 1.15];
  return (
    <group>
      <mesh position={[0, 1.1, -0.3]} castShadow receiveShadow>
        <boxGeometry args={[3.5, 2.2, 2.1]} />
        <meshStandardMaterial color={palette.wallCream} roughness={0.85} />
      </mesh>
      <mesh position={[0, 2.35, -0.3]} castShadow>
        <coneGeometry args={[2.15, 0.75, 3]} />
        <meshStandardMaterial color={palette.accentTerracotta} roughness={0.6} />
      </mesh>
      {columnXs.map((x, i) => (
        <mesh key={i} position={[x, 0.85, 0.95]} castShadow>
          <cylinderGeometry args={[0.11, 0.13, 1.7, 14]} />
          <meshStandardMaterial color={palette.wallIvory} roughness={0.7} />
        </mesh>
      ))}
      <mesh position={[0, 1.75, 0.95]}>
        <boxGeometry args={[3.1, 0.1, 0.1]} />
        <meshStandardMaterial color={palette.wallIvory} roughness={0.7} />
      </mesh>
      <mesh position={[0, 1.2, 0.15]}>
        <boxGeometry args={[1.6, 1.2, 0.03]} />
        <meshPhysicalMaterial color={palette.glass} emissive={palette.glassWarm} emissiveIntensity={0.3} roughness={0.2} transparent opacity={0.85} />
      </mesh>
      <mesh position={[0, 0.05, 0.6]} receiveShadow>
        <boxGeometry args={[3.7, 0.12, 1.3]} />
        <meshStandardMaterial color={palette.wallCharcoal} roughness={0.8} />
      </mesh>
      <mesh position={[0, -0.06, 1.0]} receiveShadow>
        <boxGeometry args={[3.9, 0.1, 0.5]} />
        <meshStandardMaterial color={palette.stone} roughness={0.9} />
      </mesh>
    </group>
  );
}
