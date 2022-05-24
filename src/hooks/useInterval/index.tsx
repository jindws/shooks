import { useEffect } from "react";
import { useLatest } from "../../index";

function useInterval(
  fn: () => void,
  delay?: number,
  immediate?: boolean
): void {
  const fun = useLatest(fn);

  useEffect(() => {
    if (immediate) {
      fun.current();
    }
  }, []);

  useEffect(() => {
    if (delay) {
      const si = setInterval(() => fun.current(), delay);
      return () => clearInterval(si);
    }
  }, [delay]);
}

export default useInterval;
