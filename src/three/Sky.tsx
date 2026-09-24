import { useMemo } from "react";
import * as THREE from "three";
import { palette } from "./palette";

export default function Sky() {
  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(140, 32, 20);
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const top = new THREE.Color(palette.sky);
    const horizon = new THREE.Color(palette.skyHorizon);
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i) / 140;
      const t = THREE.MathUtils.clamp(y + 0.15, 0, 1);
      const c = horizon.clone().lerp(top, t);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, []);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial vertexColors side={THREE.BackSide} fog={false} />
    </mesh>
  );
}
