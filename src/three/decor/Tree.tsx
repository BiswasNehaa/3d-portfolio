import { palette } from "../palette";

export default function Tree({
  position,
  scale = 1,
  variant = "cone",
}: {
  position: [number, number, number];
  scale?: number;
  variant?: "cone" | "round";
}) {
  if (variant === "round") {
    return (
      <group position={position} scale={scale}>
        <mesh position={[0, 0.5, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.12, 1.0, 8]} />
          <meshStandardMaterial color={palette.trunk} roughness={0.9} />
        </mesh>
        <mesh position={[0, 1.35, 0]} castShadow>
          <sphereGeometry args={[0.62, 14, 12]} />
          <meshStandardMaterial color={palette.foliageWarm} roughness={0.85} />
        </mesh>
        <mesh position={[0.28, 1.15, 0.2]} castShadow>
          <sphereGeometry args={[0.38, 12, 10]} />
          <meshStandardMaterial color={palette.foliage} roughness={0.85} />
        </mesh>
      </group>
    );
  }

  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.09, 0.7, 10]} />
        <meshStandardMaterial color={palette.trunk} roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.0, 0]} castShadow>
        <coneGeometry args={[0.55, 1.1, 14]} />
        <meshStandardMaterial color={palette.foliage} roughness={0.85} />
      </mesh>
      <mesh position={[0, 1.45, 0]} castShadow>
        <coneGeometry args={[0.38, 0.8, 14]} />
        <meshStandardMaterial color={palette.foliageDark} roughness={0.85} />
      </mesh>
    </group>
  );
}
