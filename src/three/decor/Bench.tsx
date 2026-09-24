import { palette } from "../palette";

export default function Bench({ position, rotation = 0 }: { position: [number, number, number]; rotation?: number }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.32, 0]} castShadow>
        <boxGeometry args={[1.1, 0.06, 0.4]} />
        <meshStandardMaterial color={palette.wallWood} roughness={0.85} />
      </mesh>
      <mesh position={[0, 0.55, -0.17]} castShadow>
        <boxGeometry args={[1.1, 0.4, 0.06]} />
        <meshStandardMaterial color={palette.wallWood} roughness={0.85} />
      </mesh>
      <mesh position={[-0.45, 0.16, 0.14]}>
        <boxGeometry args={[0.06, 0.32, 0.06]} />
        <meshStandardMaterial color={palette.roofCharcoal} roughness={0.6} />
      </mesh>
      <mesh position={[0.45, 0.16, 0.14]}>
        <boxGeometry args={[0.06, 0.32, 0.06]} />
        <meshStandardMaterial color={palette.roofCharcoal} roughness={0.6} />
      </mesh>
    </group>
  );
}
