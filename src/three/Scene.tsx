import { useMemo, type ComponentType } from "react";
import * as THREE from "three";
import { locations } from "../data/content";
import type { LocationId } from "../data/content";
import Ground from "./Ground";
import Sky from "./Sky";
import Building from "./Building";
import House from "./buildings/House";
import Studio from "./buildings/Studio";
import Archive from "./buildings/Archive";
import Lab from "./buildings/Lab";
import University from "./buildings/University";
import Theatre from "./buildings/Theatre";
import Tree from "./decor/Tree";
import Lamp from "./decor/Lamp";
import Bush from "./decor/Bush";
import FlowerBed from "./decor/FlowerBed";
import Bench from "./decor/Bench";
import CameraRig from "./CameraRig";
import { palette } from "./palette";
import { terrainHeightAt } from "./terrain";

const buildingComponents: Record<LocationId, ComponentType> = {
  house: House,
  studio: Studio,
  archive: Archive,
  lab: Lab,
  university: University,
  theatre: Theatre,
};

type Placement = { x: number; z: number; scale?: number; variant?: "cone" | "round"; rotation?: number };

const trees: Placement[] = [
  { x: -13, z: 9, variant: "round" }, { x: -15, z: -3, variant: "cone" },
  { x: -8, z: -11, variant: "cone" }, { x: -13, z: -18, variant: "round" },
  { x: -16, z: -22, variant: "cone" }, { x: 3, z: -12, variant: "round" },
  { x: 12, z: -8, variant: "cone" }, { x: 13, z: 2, variant: "round" },
  { x: 10, z: 8, variant: "cone" }, { x: -2, z: 10, variant: "round" },
  { x: -6, z: 13, variant: "cone" }, { x: 1, z: -20, variant: "cone" },
  { x: 9, z: -20, variant: "round" }, { x: -4, z: -24, variant: "cone" },
  { x: 3, z: -25, variant: "round" }, { x: -10, z: -25, variant: "cone" },
  { x: 8, z: -25, variant: "cone" }, { x: -5, z: -1, variant: "round" },
  { x: 2, z: 1, variant: "cone" }, { x: -12, z: 2, variant: "round" },
];

const bushes: Placement[] = [
  { x: -10.5, z: 3.5 }, { x: -8.5, z: 5.5 }, { x: -4.5, z: -4 }, { x: -1.5, z: -6 },
  { x: 6.5, z: -2.5 }, { x: 9.5, z: -5 }, { x: 4.5, z: -14 }, { x: 7.5, z: -17 },
  { x: -8, z: -13 }, { x: -10.5, z: -16 }, { x: -2.5, z: -27 }, { x: 1, z: -30 },
  { x: 4, z: 12 }, { x: -1, z: 13 },
];

const flowerBeds: [number, number][] = [
  [-9.5, 4.5], [-2.5, -6.5], [7, -18], [-9, -14.5], [-1, -27],
];

const benches: { x: number; z: number; rotation: number }[] = [
  { x: 0, z: 10, rotation: 0.3 },
  { x: 3, z: -3, rotation: -0.6 },
  { x: -6, z: -20, rotation: 1.2 },
];

export default function WorldScene({
  selected,
  onSelect,
  reducedMotion,
}: {
  selected: LocationId | null;
  onSelect: (id: LocationId) => void;
  reducedMotion: boolean;
}) {
  const fogColor = useMemo(() => new THREE.Color(palette.skyHorizon), []);

  const placedTrees = useMemo(
    () => trees.map((t) => ({ ...t, y: terrainHeightAt(t.x, t.z) })),
    []
  );
  const placedBushes = useMemo(
    () => bushes.map((b) => ({ ...b, y: terrainHeightAt(b.x, b.z) })),
    []
  );

  return (
    <>
      <color attach="background" args={[fogColor]} />
      <fog attach="fog" args={[fogColor.getHex(), 16, 58]} />
      <Sky />

      <ambientLight intensity={0.6} color="#fff1da" />
      <directionalLight
        position={[-16, 15, 12]}
        intensity={1.75}
        color="#ffd39a"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-26}
        shadow-camera-right={26}
        shadow-camera-top={26}
        shadow-camera-bottom={-26}
        shadow-bias={-0.0015}
      />
      <directionalLight position={[10, 8, -14]} intensity={0.35} color="#7fa0a8" />
      <hemisphereLight color="#fff3dc" groundColor="#8a9a63" intensity={0.45} />

      <Ground />

      {locations.map((loc) => {
        const Comp = buildingComponents[loc.id];
        const y = terrainHeightAt(loc.position[0], loc.position[2]);
        return (
          <Building
            key={loc.id}
            id={loc.id}
            position={[loc.position[0], y, loc.position[2]]}
            rotation={loc.rotation}
            label={loc.label}
            prompt={loc.prompt}
            onSelect={onSelect}
            disabled={!!selected}
          >
            <Comp />
          </Building>
        );
      })}

      {placedTrees.map((t, i) => (
        <Tree key={i} position={[t.x, t.y, t.z]} scale={0.85 + (i % 4) * 0.09} variant={t.variant} />
      ))}
      {placedBushes.map((b, i) => (
        <Bush key={i} position={[b.x, b.y, b.z]} scale={0.9 + (i % 3) * 0.12} />
      ))}
      {flowerBeds.map(([x, z], i) => (
        <FlowerBed key={i} position={[x, terrainHeightAt(x, z), z]} />
      ))}
      {benches.map((b, i) => (
        <Bench key={i} position={[b.x, terrainHeightAt(b.x, b.z), b.z]} rotation={b.rotation} />
      ))}
      {[
        { x: -4, z: 11 }, { x: -1, z: -4 }, { x: 5, z: -9 },
        { x: 6, z: -13 }, { x: -6, z: -17 }, { x: -2, z: -23 },
      ].map((p, i) => (
        <Lamp key={i} position={[p.x, terrainHeightAt(p.x, p.z), p.z]} />
      ))}

      <CameraRig selected={selected} reducedMotion={reducedMotion} />
    </>
  );
}
