import { useEffect, useState, Suspense, lazy } from "react";
import type { LocationId } from "./data/content";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { useWebGLSupport } from "./hooks/useWebGLSupport";
import { useIsMobile } from "./hooks/useIsMobile";
import IntroTitle from "./components/IntroTitle";
import MiniNav from "./components/MiniNav";
import LocationPanel from "./components/LocationPanel";
import TheatreSequence from "./components/TheatreSequence";
import MobileJourney from "./components/MobileJourney";

const World = lazy(() => import("./three/World"));

function DesktopWorld() {
  const [selected, setSelected] = useState<LocationId | null>(null);
  const [theatreActive, setTheatreActive] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (selected === "theatre") {
      const t = setTimeout(() => setTheatreActive(true), reducedMotion ? 150 : 1400);
      return () => clearTimeout(t);
    }
    setTheatreActive(false);
  }, [selected, reducedMotion]);

  return (
    <div className="film-grain fixed inset-0 bg-charcoal-deep">
      <Suspense fallback={null}>
        <World selected={selected} onSelect={setSelected} reducedMotion={reducedMotion} />
      </Suspense>

      <IntroTitle dismissed={!!selected} />

      <LocationPanel selected={selected} onClose={() => setSelected(null)} />

      {theatreActive && (
        <TheatreSequence
          onClose={() => {
            setTheatreActive(false);
            setSelected(null);
          }}
        />
      )}

      {!theatreActive && <MiniNav selected={selected} onSelect={setSelected} />}
    </div>
  );
}

function App() {
  const isMobile = useIsMobile();
  const webglSupported = useWebGLSupport();

  if (isMobile || !webglSupported) {
    return <MobileJourney />;
  }

  return <DesktopWorld />;
}

export default App;
