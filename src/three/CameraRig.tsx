import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import type { LocationId } from "../data/content";
import { locations } from "../data/content";
import { terrainHeightAt } from "./terrain";

const IDLE_EYE = { x: 2.5, z: 9 };
const IDLE_LOOK = { x: -2, z: -6 };
const START_EYE = { x: 2, z: 20 };

const idleEyeY = terrainHeightAt(IDLE_EYE.x, IDLE_EYE.z);
const idleLookY = terrainHeightAt(IDLE_LOOK.x, IDLE_LOOK.z);
const startEyeY = terrainHeightAt(START_EYE.x, START_EYE.z);

const IDLE_VIEW = {
  position: new THREE.Vector3(IDLE_EYE.x, idleEyeY + 2.3, IDLE_EYE.z),
  target: new THREE.Vector3(IDLE_LOOK.x, idleLookY + 1.4, IDLE_LOOK.z),
};
const ESTABLISHING_VIEW = {
  position: new THREE.Vector3(START_EYE.x, startEyeY + 2.6, START_EYE.z),
  target: new THREE.Vector3(IDLE_LOOK.x, idleLookY + 1.5, IDLE_LOOK.z - 4),
};

function focusViewFor(id: LocationId) {
  const loc = locations.find((l) => l.id === id)!;
  const [x, , z] = loc.position;
  const dx = x - IDLE_LOOK.x;
  const dz = z - IDLE_LOOK.z;
  const dist = Math.sqrt(dx * dx + dz * dz) || 1;
  const dirX = dx / dist;
  const dirZ = dz / dist;
  const groundY = terrainHeightAt(x, z);
  const position = new THREE.Vector3(x - dirX * 5.2, groundY + 2.1, z - dirZ * 5.2);
  const target = new THREE.Vector3(x, groundY + 1.6, z);
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
      currentLook.current.copy(ESTABLISHING_VIEW.target);
      initialized.current = true;
    }
    const view = selected ? focusViewFor(selected) : IDLE_VIEW;
    targetPos.current.copy(view.position);
    targetLook.current.copy(view.target);
    setMode("traveling");
  }, [selected, camera]);

  useFrame((_, delta) => {
    if (mode !== "traveling") return;
    const speed = reducedMotion ? 1 : 1 - Math.pow(0.0012, delta);
    camera.position.lerp(targetPos.current, speed);
    currentLook.current.lerp(targetLook.current, speed);
    camera.lookAt(currentLook.current);

    const arrived = camera.position.distanceTo(targetPos.current) < 0.03;
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
      minDistance={6}
      maxDistance={17}
      minPolarAngle={0.95}
      maxPolarAngle={1.48}
      rotateSpeed={0.3}
      zoomSpeed={0.45}
      dampingFactor={0.08}
      enableDamping
      makeDefault
    />
  );
}
