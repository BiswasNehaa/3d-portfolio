import { palette } from "../palette";

export default function Lab() {
  return (
    <group>
      <mesh position={[0, 1.05, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.45, 1.6, 2.1, 24]} />
        <meshStandardMaterial color={palette.wallIvory} roughness={0.8} />
      </mesh>
      <mesh position={[0, 2.15, 0]} castShadow>
        <sphereGeometry args={[1.45, 28, 18, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={palette.roofCobalt} roughness={0.35} metalness={0.2} />
      </mesh>
      <mesh position={[0, 2.14, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.08, 20]} />
        <meshStandardMaterial color={palette.accentSun} emissive={palette.accentSun} emissiveIntensity={0.6} />
      </mesh>
      {/* ring of glass panels around the drum */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i / 6) * Math.PI * 2;
        const r = 1.51;
        return (
          <mesh key={i} position={[Math.sin(angle) * r, 1.05, Math.cos(angle) * r]} rotation={[0, angle, 0]}>
            <boxGeometry args={[0.62, 1.3, 0.03]} />
            <meshPhysicalMaterial color={palette.glass} emissive={palette.glassWarm} emissiveIntensity={0.3} roughness={0.2} transparent opacity={0.8} />
          </mesh>
        );
      })}
      {/* entrance canopy */}
      <mesh position={[0, 0.5, 1.65]}>
        <boxGeometry args={[1.0, 0.05, 0.6]} />
        <meshStandardMaterial color={palette.accentSage} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.06, 1.9]} receiveShadow>
        <boxGeometry args={[1.4, 0.12, 0.5]} />
        <meshStandardMaterial color={palette.stone} roughness={0.9} />
      </mesh>
    </group>
  );
}
