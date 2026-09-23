import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function CoreAssembly() {
  const knot = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const satellite = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (knot.current) {
      knot.current.rotation.y = t * 0.18;
      knot.current.rotation.x = Math.sin(t * 0.15) * 0.2;
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.22;
    if (ringB.current) ringB.current.rotation.x = t * -0.16;
    if (satellite.current) {
      satellite.current.position.x = Math.cos(t * 0.4) * 2.6;
      satellite.current.position.z = Math.sin(t * 0.4) * 2.6;
      satellite.current.position.y = Math.sin(t * 0.6) * 0.4;
    }
  });

  return (
    <group>
      <mesh ref={knot}>
        <torusKnotGeometry args={[0.85, 0.22, 140, 16, 2, 3]} />
        <meshStandardMaterial color="#2540ff" wireframe emissive="#2540ff" emissiveIntensity={0.4} toneMapped={false} />
      </mesh>
      <mesh ref={ringA} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[1.9, 0.01, 8, 128]} />
        <meshBasicMaterial color="#1b1710" transparent opacity={0.35} />
      </mesh>
      <mesh ref={ringB} rotation={[0, 0, Math.PI / 3]}>
        <torusGeometry args={[2.35, 0.008, 8, 128]} />
        <meshBasicMaterial color="#d8391e" transparent opacity={0.5} />
      </mesh>
      <mesh ref={satellite}>
        <boxGeometry args={[0.14, 0.14, 0.14]} />
        <meshStandardMaterial color="#d8391e" emissive="#d8391e" emissiveIntensity={0.8} toneMapped={false} />
      </mesh>
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 3]} intensity={20} color="#2540ff" />
      <pointLight position={[-3, -2, 2]} intensity={12} color="#d8391e" />
    </group>
  );
}

function Rig({ interactive }: { interactive: boolean }) {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 6));

  useFrame(() => {
    if (interactive) {
      target.current.x = pointer.x * 0.7;
      target.current.y = pointer.y * 0.45;
    }
    camera.position.x += (target.current.x - camera.position.x) * 0.03;
    camera.position.y += (target.current.y - camera.position.y) * 0.03;
    camera.position.z = 6;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function MachineArrival({ interactive = true }: { interactive?: boolean }) {
  const dpr = useMemo(() => [1, 1.75] as [number, number], []);
  return (
    <Canvas dpr={dpr} camera={{ position: [0, 0, 6], fov: 42 }} gl={{ antialias: true, alpha: true }}>
      <CoreAssembly />
      <Rig interactive={interactive} />
    </Canvas>
  );
}
