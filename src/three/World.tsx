import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import WorldScene from "./Scene";
import type { LocationId } from "../data/content";

export default function World({
  selected,
  onSelect,
  reducedMotion,
}: {
  selected: LocationId | null;
  onSelect: (id: LocationId) => void;
  reducedMotion: boolean;
}) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ fov: 42, near: 0.5, far: 120 }}
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        <WorldScene selected={selected} onSelect={onSelect} reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}
