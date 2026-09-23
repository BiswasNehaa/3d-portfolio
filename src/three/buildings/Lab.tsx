import { palette } from "../palette";

export default function Lab() {
  return (
    <group>
      <mesh position={[0, 1.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.6, 2.2, 20]} />
        <meshStandardMaterial color={palette.wallIvory} roughness={0.8} />
      </mesh>
      <mesh position={[0, 2.25, 0]} castShadow>
        <sphereGeometry args={[1.5, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={palette.roofCobalt} roughness={0.4} metalness={0.15} />
      </mesh>
      <mesh position={[0, 2.24, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.08, 16]} />
        <meshStandardMaterial color={palette.accentSun} emissive={palette.accentSun} emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0, 0.55, 1.48]}>
        <boxGeometry args={[0.7, 1.1, 0.06]} />
        <meshStandardMaterial color={palette.accentSage} roughness={0.6} />
      </mesh>
    </group>
  );
}
