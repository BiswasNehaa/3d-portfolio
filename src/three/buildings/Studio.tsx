import { palette } from "../palette";

export default function Studio() {
  return (
    <group>
      <mesh position={[0, 1.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.6, 2.8, 2.6]} />
        <meshStandardMaterial color={palette.wallCharcoal} roughness={0.75} />
      </mesh>
      <mesh position={[0, 1.4, 1.32]}>
        <boxGeometry args={[2.7, 1.9, 0.04]} />
        <meshPhysicalMaterial
          color={palette.glass}
          emissive={palette.accentSun}
          emissiveIntensity={0.25}
          roughness={0.15}
          metalness={0.1}
          transparent
          opacity={0.85}
        />
      </mesh>
      <mesh position={[0, 2.87, 0]}>
        <boxGeometry args={[3.9, 0.1, 2.9]} />
        <meshStandardMaterial color={palette.roofCobalt} roughness={0.6} />
      </mesh>
      <mesh position={[-2.05, 1.4, 0]}>
        <boxGeometry args={[0.1, 2.8, 2.6]} />
        <meshStandardMaterial color={palette.accentOrange} roughness={0.7} />
      </mesh>
    </group>
  );
}
