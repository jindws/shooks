import { useMemo } from "react";
import useLatest from "../useLatest";

function useThrottleFn(
  fn: (...args: unknown[]) => void,
  wait: number = 1000
): () => void {
  const ref = useLatest(fn);
  return useMemo(() => {
    let time = Date.now();
    return function (...args: unknown[]) {
      if (Date.now() - time < wait) return;
      ref.current.apply(null, args);
      time = Date.now();
    };
  }, []);
}

export default useThrottleFn;
