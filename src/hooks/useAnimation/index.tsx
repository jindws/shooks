import { useCallback, useMemo, useState } from "react";
import "./animation.scss";

function useAnimation(
  name:
    | "fadeIn"
    | "fadeOut"
    | "zoomIn"
    | "zoomOut"
    | "pulse"
    | "fadeInDownBig"
    | "bounce"
    | "shakeX"
    | "shakeY"
    | "rubberBand"
    | "flash",
  options?: {
    duration?: number;
    count?: number | "infinite";
    timing?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
    fillMode?: "none" | "forwards" | "backwards" | "both";
    delay?: number;
    alternate?: boolean;
  }
): [Record<string, string | number>, () => void] {
  const [paused, setPause] = useState(false);
  const styles = useMemo(() => {
    const {
      duration = 2,
      count = 1,
      timing = "linear",
      fillMode = "forwards",
      delay = 0,
      alternate,
    } = options || {};
    return {
      animationName: name,
      animationDuration: `${duration}s`,
      animationIterationCount: count,
      animationPlayState: paused ? "paused" : "running",
      animationTimingFunction: timing,
      animationFillMode: fillMode,
      animationDelay: delay,
      animationDirection: alternate ? "alternate" : "normal",
    };
  }, [name, options, paused]);

  const togglePause = useCallback(() => {
    setPause(!paused);
  }, [paused]);

  return [styles, togglePause];
}

export default useAnimation;
