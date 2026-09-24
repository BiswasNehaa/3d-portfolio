import { palette } from "../palette";

const offsets: [number, number][] = [
  [0, 0], [0.18, 0.1], [-0.16, 0.12], [0.08, -0.16], [-0.1, -0.14], [0.22, -0.05],
];

export default function FlowerBed({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, -0.02, 0]} receiveShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.06, 16]} />
        <meshStandardMaterial color={palette.soil} roughness={1} />
      </mesh>
      {offsets.map(([x, z], i) => (
        <mesh key={i} position={[x, 0.05, z]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? palette.flower : palette.flowerLight}
            emissive={i % 2 === 0 ? palette.flower : palette.flowerLight}
            emissiveIntensity={0.15}
            roughness={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}
