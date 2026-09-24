import { useMemo } from "react";
import * as THREE from "three";
import { palette } from "./palette";
import { terrainHeightAt, ROUTE_POINTS, POND } from "./terrain";

function colorForHeight(h: number): THREE.Color {
  const near = new THREE.Color(palette.grassNear);
  const far = new THREE.Color(palette.grassFar);
  const dry = new THREE.Color(palette.grassDry);
  if (h > 0.55) return far.clone().lerp(dry, Math.min((h - 0.55) / 1.1, 1));
  if (h < -0.55) return near.clone().lerp(far, Math.min((-h - 0.55) / 1.1, 1));
  return near.clone().lerp(far, (h + 0.55) / 1.1);
}

export default function Ground() {
  const terrainGeometry = useMemo(() => {
    const size = 130;
    const segments = 110;
    const geo = new THREE.PlaneGeometry(size, size, segments, segments);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const h = terrainHeightAt(x, z);
      pos.setY(i, h);
      const c = colorForHeight(h);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    return geo;
  }, []);

  const pondY = terrainHeightAt(POND.x, POND.z) - 0.05;

  return (
    <group>
      <mesh geometry={terrainGeometry} receiveShadow>
        <meshStandardMaterial vertexColors roughness={0.95} metalness={0} />
      </mesh>

      {ROUTE_POINTS.slice(0, -1).map((p, i) => {
        const next = ROUTE_POINTS[i + 1];
        const dx = next.x - p.x;
        const dz = next.z - p.z;
        const length = Math.sqrt(dx * dx + dz * dz);
        const angle = Math.atan2(dx, dz);
        const midX = (p.x + next.x) / 2;
        const midZ = (p.z + next.z) / 2;
        const midY = terrainHeightAt(midX, midZ) + 0.04;
        return (
          <mesh key={i} rotation={[-Math.PI / 2, 0, -angle]} position={[midX, midY, midZ]} receiveShadow>
            <planeGeometry args={[2, length + 1]} />
            <meshStandardMaterial color={palette.path} roughness={0.9} />
          </mesh>
        );
      })}

      <mesh position={[POND.x, pondY, POND.z]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3.1, 40]} />
        <meshStandardMaterial color={palette.water} roughness={0.15} metalness={0.35} />
      </mesh>
      <mesh position={[POND.x, pondY - 0.15, POND.z]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3.5, 40]} />
        <meshStandardMaterial color={palette.waterDeep} roughness={0.6} />
      </mesh>
    </group>
  );
}
