import { AnimatePresence, motion } from "framer-motion";
import { useScene } from "./state/useScene";
import type { SceneId } from "./state/useScene";
import TopBar from "./components/ui/TopBar";
import Intro from "./components/scenes/Intro";
import Hub from "./components/scenes/Hub";
import Person from "./components/scenes/Person";
import Workshop from "./components/scenes/Workshop";
import ProjectWorld from "./components/scenes/ProjectWorld";
import Mind from "./components/scenes/Mind";
import Archive from "./components/scenes/Archive";
import FieldNotes from "./components/scenes/FieldNotes";
import Contact from "./components/scenes/Contact";

function App() {
  const { scene, go, visited } = useScene();
  const toHub = () => go("hub");

  return (
    <div className="grain min-h-screen">
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

        {scene === "person" && <Person key="person" onBack={toHub} />}
        {scene === "workshop" && <Workshop key="workshop" go={(s: SceneId) => go(s)} onBack={toHub} />}
        {scene === "mind" && <Mind key="mind" onBack={toHub} />}
        {scene === "archive" && <Archive key="archive" onBack={toHub} />}
        {scene === "fieldnotes" && <FieldNotes key="fieldnotes" onBack={toHub} />}
        {scene === "contact" && <Contact key="contact" onBack={toHub} />}

        {scene.startsWith("project:") && (
          <ProjectWorld
            key={scene}
            projectId={scene.split(":")[1]}
            onBack={() => go("workshop")}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
