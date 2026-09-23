import { palette } from "../palette";

export default function Theatre() {
  return (
    <group>
      <mesh position={[0, 1.7, -0.3]} castShadow receiveShadow>
        <boxGeometry args={[3.8, 3.4, 2.6]} />
        <meshStandardMaterial color={palette.wallCharcoal} roughness={0.7} />
      </mesh>
      <mesh position={[0, 1.1, 1.15]} rotation={[0, 0, Math.PI]} castShadow>
        <cylinderGeometry args={[1.35, 1.35, 1.6, 24, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color={palette.roofOrange} roughness={0.55} side={2} />
      </mesh>
      <mesh position={[0, 2.9, 1.32]}>
        <boxGeometry args={[2.6, 0.55, 0.08]} />
        <meshStandardMaterial
          color={palette.accentSun}
          emissive={palette.accentSun}
          emissiveIntensity={0.85}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0, 0.5, 1.9]}>
        <boxGeometry args={[1.1, 1.0, 0.05]} />
        <meshStandardMaterial color={palette.roofCharcoal} roughness={0.8} />
      </mesh>
    </group>
  );
}
