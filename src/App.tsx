import { AnimatePresence, motion } from "framer-motion";
import { useScene } from "./state/useScene";
import type { SceneId } from "./state/useScene";
import TopBar from "./components/ui/TopBar";
import Intro from "./components/scenes/Intro";
import Hub from "./components/scenes/Hub";
import Engineer from "./components/scenes/Engineer";
import Workshop from "./components/scenes/Workshop";
import ProjectWorld from "./components/scenes/ProjectWorld";
import Instruments from "./components/scenes/Instruments";
import Archive from "./components/scenes/Archive";
import Log from "./components/scenes/Log";
import Signal from "./components/scenes/Signal";

function App() {
  const { scene, go, visited } = useScene();
  const toHub = () => go("hub");

  return (
    <div className="grain min-h-screen bg-ink">
      {scene !== "intro" && <TopBar scene={scene} go={go} />}

      <AnimatePresence mode="wait">
        {scene === "intro" && (
          <motion.div key="intro" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <Intro onEnter={toHub} />
          </motion.div>
        )}

        {scene === "hub" && (
          <motion.div
            key="hub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Hub go={(id) => go(id)} visited={visited} />
          </motion.div>
        )}

        {scene === "engineer" && <Engineer key="engineer" onBack={toHub} />}
        {scene === "workshop" && <Workshop key="workshop" go={(s: SceneId) => go(s)} onBack={toHub} />}
        {scene === "instruments" && <Instruments key="instruments" onBack={toHub} />}
        {scene === "archive" && <Archive key="archive" onBack={toHub} />}
        {scene === "log" && <Log key="log" onBack={toHub} />}
        {scene === "signal" && <Signal key="signal" onBack={toHub} />}

        {scene.startsWith("project:") && (
          <ProjectWorld key={scene} projectId={scene.split(":")[1]} onBack={() => go("workshop")} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
