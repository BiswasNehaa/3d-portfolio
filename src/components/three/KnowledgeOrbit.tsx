import { Suspense, lazy } from "react";
import { useWebGLSupport } from "../../hooks/useWebGLSupport";

const Scene = lazy(() => import("./KnowledgeOrbitScene"));

export default function KnowledgeOrbit() {
  const supported = useWebGLSupport();

  if (!supported) {
    return (
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_60%)]"
        aria-hidden="true"
      />
    );
  }

  return (
    <Suspense fallback={null}>
      <Scene />
    </Suspense>
  );
}
