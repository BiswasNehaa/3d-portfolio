import { useCallback, useState } from "react";
import type { RoomId } from "../data/content";

export type SceneId = "intro" | "hub" | RoomId | `project:${string}`;

export function useScene() {
  const [scene, setScene] = useState<SceneId>("intro");
  const [visited, setVisited] = useState<Set<SceneId>>(new Set());

  const go = useCallback((next: SceneId) => {
    setScene(next);
    setVisited((prev) => {
      const copy = new Set(prev);
      copy.add(next);
      return copy;
    });
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return { scene, go, visited };
}
