import { palette } from "../palette";

export default function Theatre() {
  return (
    <group>
      <mesh position={[0, 2.0, -0.4]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 4.0, 3.0]} />
        <meshStandardMaterial color={palette.wallCharcoal} roughness={0.65} />
      </mesh>
      {/* rounded entrance canopy */}
      <mesh position={[0, 1.15, 1.3]} rotation={[0, 0, Math.PI]} castShadow>
        <cylinderGeometry args={[1.5, 1.5, 1.8, 28, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color={palette.roofOrange} roughness={0.5} side={2} />
      </mesh>
      {/* vertical marquee blade sign */}
      <mesh position={[1.9, 3.0, 1.3]}>
        <boxGeometry args={[0.5, 3.0, 0.35]} />
        <meshStandardMaterial
          color={palette.accentSun}
          emissive={palette.accentSun}
          emissiveIntensity={1.0}
          toneMapped={false}
        />
      </mesh>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[1.9, 1.75 + i * 0.55, 1.48]}>
          <boxGeometry args={[0.38, 0.06, 0.02]} />
          <meshStandardMaterial color={palette.roofCharcoal} />
        </mesh>
      ))}
      {/* horizontal marquee over entrance */}
      <mesh position={[0, 2.95, 1.5]}>
        <boxGeometry args={[3.0, 0.6, 0.1]} />
        <meshStandardMaterial
          color={palette.accentSun}
          emissive={palette.accentSun}
          emissiveIntensity={0.9}
          toneMapped={false}
        />
      </mesh>
      {/* doors */}
      <mesh position={[0, 0.55, 2.05]}>
        <boxGeometry args={[1.3, 1.05, 0.06]} />
        <meshStandardMaterial color={palette.roofCharcoal} roughness={0.75} />
      </mesh>
      {/* grand steps */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 0.05 + i * 0.1, 2.35 + i * 0.28]} receiveShadow>
          <boxGeometry args={[3.6 - i * 0.4, 0.1, 0.3]} />
          <meshStandardMaterial color={palette.stone} roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}
