/**
 * @desc 轮询
 */
import { useCallback, useEffect, useState } from "react";
import { useLatest } from "../../index";

function usePolling(
  callback: Function,
  options: {
    interval?: number;
    maxTime?: number;
    initRun?: boolean;
    immediate?: boolean;
  } = {}
): [
  boolean,
  {
    start: () => void;
    stop: () => void;
  }
] {
  const { interval = 2000, initRun, immediate, maxTime } = options;

  const [si, setSI] = useState<number>();
  const [running, setRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  const reTime = useLatest(time);
  const reFun = useLatest(callback);
  const reSi = useLatest(si);

  useEffect(() => {
    if (immediate) {
      reFun.current();
    }
    if (initRun) {
      start(immediate);
    }
  }, []);

  const start = useCallback((immediate?: boolean) => {
    maxTime && setTime(maxTime);
    setSI(
      setInterval(() => {
        if (maxTime) {
          if (!reTime.current) return stop();
          setTime(reTime.current - 1);
        }
        reFun.current();
      }, interval)
    );
    setRunning(true);
  }, []);
  const stop = useCallback(() => {
    clearInterval(reSi.current);
    setRunning(false);
  }, []);
  return [
    running,
    {
      start,
      stop,
    },
  ];
}

export default usePolling;
