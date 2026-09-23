import { useRef, useState, type ReactNode } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import type { LocationId } from "../data/content";

export default function Building({
  id,
  position,
  label,
  prompt,
  onSelect,
  disabled,
  children,
}: {
  id: LocationId;
  position: [number, number, number];
  label: string;
  prompt: string;
  onSelect: (id: LocationId) => void;
  disabled: boolean;
  children: ReactNode;
}) {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!group.current) return;
    const targetScale = hovered && !disabled ? 1.035 : 1;
    group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
  });

  return (
    <group
      ref={group}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        if (disabled) return;
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (disabled) return;
        onSelect(id);
      }}
    >
      {children}
      {hovered && !disabled && (
        <Html position={[0, 3.6, 0]} center distanceFactor={14} occlude style={{ pointerEvents: "none" }}>
          <div className="flex flex-col items-center gap-1 select-none">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ivory/80 bg-charcoal-deep/80 px-2 py-1 rounded">
              {label}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-sun whitespace-nowrap">
              {prompt}
            </span>
          </div>
        </Html>
      )}
    </group>
  );
}
