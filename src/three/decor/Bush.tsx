import { palette } from "../palette";

export default function Bush({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.22, 0]} castShadow>
        <sphereGeometry args={[0.32, 12, 10]} />
        <meshStandardMaterial color={palette.foliage} roughness={0.9} />
      </mesh>
      <mesh position={[0.22, 0.16, 0.1]} castShadow>
        <sphereGeometry args={[0.22, 10, 8]} />
        <meshStandardMaterial color={palette.foliageWarm} roughness={0.9} />
      </mesh>
      <mesh position={[-0.2, 0.14, -0.12]} castShadow>
        <sphereGeometry args={[0.2, 10, 8]} />
        <meshStandardMaterial color={palette.foliageDark} roughness={0.9} />
      </mesh>
    </group>
  );
}
