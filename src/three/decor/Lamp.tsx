import { palette } from "../palette";

export default function Lamp({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.03, 0.04, 1.5, 8]} />
        <meshStandardMaterial color={palette.wallCharcoal} roughness={0.6} />
      </mesh>
      <mesh position={[0, 1.52, 0]}>
        <sphereGeometry args={[0.09, 12, 12]} />
        <meshStandardMaterial
          color={palette.accentSun}
          emissive={palette.accentSun}
          emissiveIntensity={1.1}
          toneMapped={false}
        />
      </mesh>
      <pointLight position={[0, 1.52, 0]} color={palette.accentSun} intensity={1.4} distance={4} decay={2} />
    </group>
  );
}
