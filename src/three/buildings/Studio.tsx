import { palette } from "../palette";

export default function Studio() {
  return (
    <group>
      {/* main volume, concrete */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.8, 2.9, 2.7]} />
        <meshStandardMaterial color={palette.wallCharcoal} roughness={0.75} />
      </mesh>
      {/* floating upper terrace box, offset */}
      <mesh position={[0.7, 3.15, -0.3]} castShadow receiveShadow>
        <boxGeometry args={[2.1, 0.55, 2.0]} />
        <meshStandardMaterial color={palette.wallTeal} roughness={0.7} />
      </mesh>
      {/* huge glass facade */}
      <mesh position={[0, 1.55, 1.36]}>
        <boxGeometry args={[2.9, 2.1, 0.04]} />
        <meshPhysicalMaterial
          color={palette.glass}
          emissive={palette.glassWarm}
          emissiveIntensity={0.35}
          roughness={0.1}
          metalness={0.15}
          transparent
          opacity={0.88}
        />
      </mesh>
      {/* mullions */}
      {[-0.72, 0, 0.72].map((x, i) => (
        <mesh key={i} position={[x, 1.55, 1.39]}>
          <boxGeometry args={[0.035, 2.1, 0.02]} />
          <meshStandardMaterial color={palette.roofCharcoal} />
        </mesh>
      ))}
      <mesh position={[0, 1.55, 1.39]}>
        <boxGeometry args={[2.9, 0.035, 0.02]} />
        <meshStandardMaterial color={palette.roofCharcoal} />
      </mesh>
      {/* roof slab overhang */}
      <mesh position={[0, 3.0, 0.2]}>
        <boxGeometry args={[4.1, 0.1, 3.1]} />
        <meshStandardMaterial color={palette.roofTeal} roughness={0.55} />
      </mesh>
      {/* vertical wood accent fin */}
      <mesh position={[-2.02, 1.5, 0]}>
        <boxGeometry args={[0.12, 2.9, 2.7]} />
        <meshStandardMaterial color={palette.wallWood} roughness={0.75} />
      </mesh>
      {/* entrance awning */}
      <mesh position={[0, 0.72, 1.85]} rotation={[0.22, 0, 0]}>
        <boxGeometry args={[1.4, 0.05, 0.7]} />
        <meshStandardMaterial color={palette.accentTerracotta} roughness={0.6} />
      </mesh>
      {/* steps */}
      <mesh position={[0, 0.06, 1.9]} receiveShadow>
        <boxGeometry args={[2.2, 0.12, 0.6]} />
        <meshStandardMaterial color={palette.stone} roughness={0.9} />
      </mesh>
    </group>
  );
}
