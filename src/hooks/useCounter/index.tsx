/**
 * @desc 管理计数器
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLatest } from "../../index";
import { IFunc } from "../../shim";

function useCounter(
  initialValue: number,
  options: {
    min?: number;
    max?: number;
  } = {}
): [
  count: number,
  func: {
    inc: IFunc;
    dec: IFunc;
    set: (newValue: number) => void;
    reset: IFunc;
  }
] {
  const [count, setCount] = useState(initialValue);
  const value = useLatest(count);

  const { min, max } = useMemo(() => {
    let { min = -Infinity, max = Infinity } = options;
    if (max < min) max = min;
    return { min, max };
  }, [options]);

  useEffect(() => {
    reset();
  }, []);

  const set = useCallback((newValue: number) => {
    if (newValue > max) {
      newValue = max;
    } else if (newValue < min) {
      newValue = min;
    }
    setCount(newValue);
  }, []);

  const inc = useCallback(() => {
    set(value.current + 1);
  }, []);

  const dec = useCallback(() => {
    set(value.current - 1);
  }, []);

  const reset = useCallback(() => set(initialValue), []);

  return [
    count,
    {
      inc,
      dec,
      set,
      reset,
    },
  ];
}

export default useCounter;
