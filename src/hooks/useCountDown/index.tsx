import { useEffect, useMemo, useRef, useState } from "react";

interface IAction {
  start: () => void;
  wait: () => void;
  stop: () => void;
}

function useCountDown(
  time: number,
  options: {
    interval?: number;
    callback?: Function;
  } = {}
): [number, IAction] {
  const [remain, setRemain] = useState(Math.max(time, 0));
  const _remain = useRef(remain);
  const _interval = useMemo(
    () => Math.min(Math.max(1, Math.floor(options.interval || 1)), time),
    []
  );

  useEffect(() => {
    _remain.current = remain;
  }, [remain]);

  const [running, setRunning] = useState(false);

  useEffect(() => {
    action.start();
  }, []);

  const action: IAction = useMemo(() => {
    let si: number | undefined;
    return (function () {
      const start = function () {
        if (running) return;
        if (!_remain.current) setRemain(time);
        si = setInterval(() => {
          setRemain((prevState) => {
            const result = prevState - _interval;
            if (result <= 0) {
              clearInterval(si);
              setRunning(false);
              options.callback && options.callback();
            }
            return result;
          });
        }, Math.min(_interval, _remain.current || 1) * 1000);
      };
      const wait = function () {
        clearInterval(si);
        setRunning(false);
      };
      const stop = function () {
        clearInterval(si);
        setRemain(time);
        setRunning(false);
      };
      return { start, wait, stop };
    })();
  }, []);

  return [remain, action];
}

export default useCountDown;
