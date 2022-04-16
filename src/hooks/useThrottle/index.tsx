import { useMemo, useState } from "react";

function useThrottle<T>(
  init: T | undefined,
  wait: number = 1000
): [T | undefined, (value: T) => void] {
  const [value, setValue] = useState(init);

  const update = useMemo(() => {
    let time = Date.now();
    return function (newValue: T) {
      if (Date.now() - time < wait) return;
      setValue(newValue);
      time = Date.now();
    };
  }, []);

  return [value, update];
}

export default useThrottle;
