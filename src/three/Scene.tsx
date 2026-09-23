import { useMemo, type ComponentType } from "react";
import * as THREE from "three";
import { locations } from "../data/content";
import type { LocationId } from "../data/content";
import Ground from "./Ground";
import Building from "./Building";
import House from "./buildings/House";
import Studio from "./buildings/Studio";
import Archive from "./buildings/Archive";
import Lab from "./buildings/Lab";
import University from "./buildings/University";
import Theatre from "./buildings/Theatre";
import Tree from "./decor/Tree";
import Lamp from "./decor/Lamp";
import CameraRig from "./CameraRig";
import { palette } from "./palette";

const buildingComponents: Record<LocationId, ComponentType> = {
  house: House,
  studio: Studio,
  archive: Archive,
  lab: Lab,
  university: University,
  theatre: Theatre,
};

const trees: [number, number, number][] = [
  [-6, 0, 8], [-11, 0, -1], [-6, 0, -9], [1, 0, -10],
  [8, 0, -3], [12, 0, 6], [6, 0, 11], [-2, 0, 4],
  [-4, 0, 15], [3, 0, 15], [-9, 0, 12],
];

const lamps: [number, number, number][] = [
  [-5, 0, 1], [-1, 0, -2], [3, 0, -6], [7, 0, -1], [4, 0, 5], [0, 0, 9],
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
  const fogColor = useMemo(() => new THREE.Color(palette.ground).lerp(new THREE.Color("#f2dcae"), 0.5), []);

  return (
    <>
      <color attach="background" args={[fogColor]} />
      <fog attach="fog" args={[fogColor.getHex(), 22, 55]} />

      <ambientLight intensity={0.55} color="#fff1da" />
      <directionalLight
        position={[-14, 16, 10]}
        intensity={1.6}
        color="#ffd9a0"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <hemisphereLight color="#fff3dc" groundColor="#c8b98f" intensity={0.4} />

      <Ground />

      {locations.map((loc) => {
        const Comp = buildingComponents[loc.id];
        return (
          <Building
            key={loc.id}
            id={loc.id}
            position={loc.position}
            label={loc.label}
            prompt={loc.prompt}
            onSelect={onSelect}
            disabled={!!selected}
          >
            <Comp />
          </Building>
        );
      })}

      {trees.map((p, i) => (
        <Tree key={i} position={p} scale={0.85 + (i % 3) * 0.12} />
      ))}
      {lamps.map((p, i) => (
        <Lamp key={i} position={p} />
      ))}

      <CameraRig selected={selected} reducedMotion={reducedMotion} />
    </>
  );
}
