import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 42;

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function useNodePositions() {
  return useMemo(() => {
    const rand = seededRandom(7);
    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const radius = 2.1 + rand() * 1.9;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      positions.push(
        new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        )
      );
    }
    return positions;
  }, []);
}

function Connections({ positions }: { positions: THREE.Vector3[] }) {
  const lineGeometry = useMemo(() => {
    const points: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < 1.7) {
          points.push(positions[i].x, positions[i].y, positions[i].z);
          points.push(positions[j].x, positions[j].y, positions[j].z);
        }
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geometry;
  }, [positions]);

  return (
    <lineSegments geometry={lineGeometry}>
      <lineBasicMaterial color="#3d4a72" transparent opacity={0.35} />
    </lineSegments>
  );
}

function Nodes({ positions }: { positions: THREE.Vector3[] }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    positions.forEach((pos, i) => {
      const pulse = 1 + Math.sin(t * 1.4 + i) * 0.18;
      dummy.position.copy(pos);
      dummy.scale.setScalar(pulse);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, positions.length]}>
      <sphereGeometry args={[0.045, 12, 12]} />
      <meshStandardMaterial color="#7fdfff" emissive="#7fdfff" emissiveIntensity={1.4} toneMapped={false} />
    </instancedMesh>
  );
}

function IntelligenceCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.25;
      coreRef.current.rotation.x = t * 0.12;
      const s = 1 + Math.sin(t * 1.1) * 0.06;
      coreRef.current.scale.setScalar(s);
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.35;
      ringRef.current.rotation.x = Math.PI / 2.4;
    }
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.75, 2]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.9}
          wireframe
          toneMapped={false}
        />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[1.25, 0.006, 8, 128]} />
        <meshBasicMaterial color="#d946ef" transparent opacity={0.5} />
      </mesh>
      <pointLight color="#8b5cf6" intensity={12} distance={6} />
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const rand = seededRandom(21);
    const arr = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      arr[i * 3] = (rand() - 0.5) * 14;
      arr[i * 3 + 1] = (rand() - 0.5) * 14;
      arr[i * 3 + 2] = (rand() - 0.5) * 14;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#4b5573" size={0.018} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function CameraRig({ interactive }: { interactive: boolean }) {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 5));

  useFrame(() => {
    if (interactive) {
      target.current.x = pointer.x * 0.6;
      target.current.y = pointer.y * 0.4 + 0.1;
    }
    camera.position.x += (target.current.x - camera.position.x) * 0.03;
    camera.position.y += (target.current.y - camera.position.y) * 0.03;
    camera.position.z = 5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene({ interactive }: { interactive: boolean }) {
  const positions = useNodePositions();
  return (
    <>
      <ambientLight intensity={0.25} />
      <IntelligenceCore />
      <Nodes positions={positions} />
      <Connections positions={positions} />
      <Particles />
      <CameraRig interactive={interactive} />
    </>
  );
}

export default function NeuralCore({ interactive = true }: { interactive?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Scene interactive={interactive} />
    </Canvas>
  );
}
