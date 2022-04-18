import { useCallback, useEffect, useState } from "react";

function useStayTimeFn(callback?: (time?: number) => void): {
  stayTime: () => number;
  reset: () => void;
} {
  const [initTime, upInitTime] = useState(Date.now());

  useEffect(() => {
    if (!callback) return;
    const fn = (e: { preventDefault: () => void }) => {
      callback(stayTime());
    };
    window.addEventListener("beforeunload", fn);
    return () => window.removeEventListener("beforeunload", fn);
  });

  const stayTime = useCallback(() => {
    return Date.now() - initTime;
  }, []);

  const reset = useCallback(() => {
    upInitTime(Date.now());
  }, []);

  return { stayTime, reset };
}

export default useStayTimeFn;
