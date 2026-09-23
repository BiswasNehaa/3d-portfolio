import { palette } from "../palette";

export default function Tree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.09, 0.7, 8]} />
        <meshStandardMaterial color={palette.trunk} roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.0, 0]} castShadow>
        <coneGeometry args={[0.55, 1.1, 10]} />
        <meshStandardMaterial color={palette.foliage} roughness={0.85} />
      </mesh>
      <mesh position={[0, 1.45, 0]} castShadow>
        <coneGeometry args={[0.38, 0.8, 10]} />
        <meshStandardMaterial color={palette.foliageDark} roughness={0.85} />
      </mesh>
    </group>
  );
}
