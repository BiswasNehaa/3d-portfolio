import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function OrbitRing({ radius, speed, tilt, color }: { radius: number; speed: number; tilt: number; color: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.getElapsedTime() * speed;
  });

  return (
    <group rotation={[tilt, 0, 0]}>
      <group ref={ref}>
        <mesh>
          <torusGeometry args={[radius, 0.004, 8, 96]} />
          <meshBasicMaterial color={color} transparent opacity={0.45} />
        </mesh>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.3;
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.55, 0]} />
      <meshStandardMaterial color="#7fdfff" emissive="#7fdfff" emissiveIntensity={0.7} wireframe toneMapped={false} />
    </mesh>
  );
}

function Scene() {
  const rings = useMemo(
    () => [
      { radius: 1.1, speed: 0.3, tilt: 0.4, color: "#8b5cf6" },
      { radius: 1.55, speed: -0.22, tilt: 1.1, color: "#7fdfff" },
      { radius: 1.95, speed: 0.16, tilt: 1.9, color: "#d946ef" },
    ],
    []
  );

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[2, 2, 2]} intensity={8} color="#8b5cf6" />
      <Core />
      {rings.map((r, i) => (
        <OrbitRing key={i} {...r} />
      ))}
    </>
  );
}

export default function KnowledgeOrbitScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.6, 4], fov: 45 }} gl={{ alpha: true }}>
      <Scene />
    </Canvas>
  );
}
