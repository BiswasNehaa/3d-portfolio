import { useEffect, useState } from "react";

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export function useWebGLSupport() {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(detectWebGL());
  }, []);

  return supported;
}
