import { palette } from "../palette";

export default function House() {
  return (
    <group>
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 1.8, 2.2]} />
        <meshStandardMaterial color={palette.wallIvory} roughness={0.85} />
      </mesh>
      <mesh position={[0.6, 2.15, -0.2]} castShadow receiveShadow>
        <boxGeometry args={[1.3, 0.7, 1.6]} />
        <meshStandardMaterial color={palette.wallCharcoal} roughness={0.8} />
      </mesh>
      <mesh position={[0, 1.85, 0.02]} rotation={[0, 0, 0.04]}>
        <boxGeometry args={[2.7, 0.08, 2.3]} />
        <meshStandardMaterial color={palette.roofCharcoal} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.55, 1.11]}>
        <boxGeometry args={[0.55, 1.1, 0.04]} />
        <meshStandardMaterial color={palette.roofCharcoal} roughness={0.7} />
      </mesh>
      <mesh position={[-0.75, 1.05, 1.11]}>
        <boxGeometry args={[0.55, 0.55, 0.03]} />
        <meshStandardMaterial color={palette.accentSun} emissive={palette.accentSun} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.9, 1.05, 1.11]}>
        <boxGeometry args={[0.55, 0.55, 0.03]} />
        <meshStandardMaterial color={palette.accentSun} emissive={palette.accentSun} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}
