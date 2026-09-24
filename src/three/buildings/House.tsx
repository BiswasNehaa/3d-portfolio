import { palette } from "../palette";

export default function House() {
  return (
    <group>
      {/* stone base */}
      <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.9, 1.1, 2.4]} />
        <meshStandardMaterial color={palette.wallStone} roughness={0.95} />
      </mesh>
      {/* wood upper volume */}
      <mesh position={[-0.15, 1.55, -0.1]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.9, 2.1]} />
        <meshStandardMaterial color={palette.wallWood} roughness={0.8} />
      </mesh>
      {/* angled butterfly-ish roof, two planes */}
      <mesh position={[-0.55, 2.15, -0.1]} rotation={[0, 0, 0.18]} castShadow>
        <boxGeometry args={[1.65, 0.08, 2.3]} />
        <meshStandardMaterial color={palette.roofCharcoal} roughness={0.55} />
      </mesh>
      <mesh position={[0.65, 2.05, -0.1]} rotation={[0, 0, -0.12]} castShadow>
        <boxGeometry args={[1.55, 0.08, 2.3]} />
        <meshStandardMaterial color={palette.roofCharcoal} roughness={0.55} />
      </mesh>
      {/* chimney */}
      <mesh position={[0.9, 2.4, -0.6]}>
        <boxGeometry args={[0.25, 0.7, 0.25]} />
        <meshStandardMaterial color={palette.wallCharcoal} roughness={0.9} />
      </mesh>
      {/* big warm window */}
      <mesh position={[0, 1.5, 1.06]}>
        <boxGeometry args={[1.3, 0.85, 0.04]} />
        <meshStandardMaterial
          color={palette.glassWarm}
          emissive={palette.glassWarm}
          emissiveIntensity={0.55}
          roughness={0.25}
        />
      </mesh>
      <mesh position={[0, 1.5, 1.08]}>
        <boxGeometry args={[1.3, 0.05, 0.02]} />
        <meshStandardMaterial color={palette.roofCharcoal} />
      </mesh>
      <mesh position={[0, 1.5, 1.08]}>
        <boxGeometry args={[0.05, 0.85, 0.02]} />
        <meshStandardMaterial color={palette.roofCharcoal} />
      </mesh>
      {/* door */}
      <mesh position={[-0.9, 0.55, 1.21]}>
        <boxGeometry args={[0.55, 1.05, 0.04]} />
        <meshStandardMaterial color={palette.wallCharcoal} roughness={0.7} />
      </mesh>
      {/* steps */}
      <mesh position={[-0.9, 0.06, 1.42]} receiveShadow>
        <boxGeometry args={[0.75, 0.12, 0.35]} />
        <meshStandardMaterial color={palette.stone} roughness={0.9} />
      </mesh>
      {/* small terrace + railing on the wood volume */}
      <mesh position={[0.9, 1.12, 0.85]} receiveShadow>
        <boxGeometry args={[0.7, 0.06, 0.9]} />
        <meshStandardMaterial color={palette.wallWood} roughness={0.8} />
      </mesh>
      {[[-0.24, 0.42], [0.06, 0.42], [0.36, 0.42], [0.55, 0.15], [0.55, -0.15]].map(([dx, dz], i) => (
        <mesh key={i} position={[0.9 + dx, 1.35, 0.85 + dz]}>
          <boxGeometry args={[0.03, 0.4, 0.03]} />
          <meshStandardMaterial color={palette.roofCharcoal} roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}
