import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import type { LocationId } from "../data/content";
import { locations } from "../data/content";

const CENTER = new THREE.Vector3(1, 0, -6);
const IDLE_VIEW = { position: new THREE.Vector3(3, 14, 19), target: CENTER.clone() };
const ESTABLISHING_VIEW = { position: new THREE.Vector3(4, 32, 44), target: CENTER.clone() };

function focusViewFor(id: LocationId) {
  const loc = locations.find((l) => l.id === id)!;
  const [x, , z] = loc.position;
  const dx = x - CENTER.x;
  const dz = z - CENTER.z;
  const dist = Math.sqrt(dx * dx + dz * dz) || 1;
  const dirX = dx / dist;
  const dirZ = dz / dist;
  const position = new THREE.Vector3(x - dirX * 4.4, 2.6, z - dirZ * 4.4);
  const target = new THREE.Vector3(x, 1.2, z);
  return { position, target };
}

export default function CameraRig({
  selected,
  reducedMotion,
}: {
  selected: LocationId | null;
  reducedMotion: boolean;
}) {
  const { camera } = useThree();
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const [mode, setMode] = useState<"traveling" | "idle">("traveling");
  const targetPos = useRef(ESTABLISHING_VIEW.position.clone());
  const targetLook = useRef(ESTABLISHING_VIEW.target.clone());
  const currentLook = useRef(ESTABLISHING_VIEW.target.clone());
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      camera.position.copy(ESTABLISHING_VIEW.position);
      initialized.current = true;
    }
    const view = selected ? focusViewFor(selected) : IDLE_VIEW;
    targetPos.current.copy(view.position);
    targetLook.current.copy(view.target);
    setMode("traveling");
  }, [selected, camera]);

  useFrame((_, delta) => {
    if (mode !== "traveling") return;
    const speed = reducedMotion ? 1 : 1 - Math.pow(0.0008, delta);
    camera.position.lerp(targetPos.current, speed);
    currentLook.current.lerp(targetLook.current, speed);
    camera.lookAt(currentLook.current);

    const arrived = camera.position.distanceTo(targetPos.current) < 0.04;
    if (arrived || reducedMotion) {
      camera.position.copy(targetPos.current);
      currentLook.current.copy(targetLook.current);
      camera.lookAt(currentLook.current);
      setMode("idle");
    }
  });

  useEffect(() => {
    if (mode === "idle" && controlsRef.current) {
      controlsRef.current.target.copy(targetLook.current);
      controlsRef.current.update();
    }
  }, [mode]);

  if (mode !== "idle" || selected) return null;

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom
      minDistance={14}
      maxDistance={30}
      minPolarAngle={0.5}
      maxPolarAngle={1.3}
      rotateSpeed={0.35}
      zoomSpeed={0.5}
      dampingFactor={0.08}
      enableDamping
      makeDefault
    />
  );
}
