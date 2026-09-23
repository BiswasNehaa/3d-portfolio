import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Ring({
  radius,
  tilt,
  axis,
  speed,
  color,
  opacity = 0.55,
}: {
  radius: number;
  tilt: [number, number, number];
  axis: "x" | "y" | "z";
  speed: number;
  color: string;
  opacity?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) ref.current.rotation[axis] += speed * 0.002;
  });
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.008, 8, 128]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

function Globe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.06;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.78, 20, 14]} />
      <meshStandardMaterial
        color="#c9a24b"
        wireframe
        emissive="#c9a24b"
        emissiveIntensity={0.35}
        toneMapped={false}
      />
    </mesh>
  );
}

function Marker() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.set(Math.cos(t * 0.3) * 2.05, Math.sin(t * 0.45) * 0.5, Math.sin(t * 0.3) * 2.05);
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.045, 12, 12]} />
      <meshStandardMaterial color="#e8734a" emissive="#e8734a" emissiveIntensity={1.6} toneMapped={false} />
    </mesh>
  );
}

function Assembly() {
  return (
    <group>
      <Globe />
      <Ring radius={1.35} tilt={[0.3, 0, 0]} axis="y" speed={1} color="#c9a24b" />
      <Ring radius={1.65} tilt={[Math.PI / 2.4, 0.4, 0]} axis="x" speed={-0.7} color="#e8c775" opacity={0.4} />
      <Ring radius={2.05} tilt={[0, 0, Math.PI / 3]} axis="z" speed={0.5} color="#82868f" opacity={0.3} />
      <Marker />
      <ambientLight intensity={0.55} />
      <pointLight position={[3, 2, 3]} intensity={18} color="#e8c775" />
      <pointLight position={[-3, -1, -2]} intensity={8} color="#e8734a" />
    </group>
  );
}

function Rig({ interactive }: { interactive: boolean }) {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 6.2));

  useFrame(() => {
    if (interactive) {
      target.current.x = pointer.x * 0.6;
      target.current.y = pointer.y * 0.35;
    }
    camera.position.x += (target.current.x - camera.position.x) * 0.025;
    camera.position.y += (target.current.y - camera.position.y) * 0.025;
    camera.position.z = 6.2;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Armillary({ interactive = true }: { interactive?: boolean }) {
  const dpr = useMemo(() => [1, 1.75] as [number, number], []);
  return (
    <Canvas dpr={dpr} camera={{ position: [0, 0, 6.2], fov: 40 }} gl={{ antialias: true, alpha: true }}>
      <Assembly />
      <Rig interactive={interactive} />
    </Canvas>
  );
}
