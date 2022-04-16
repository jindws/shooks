import { useEffect, useMemo, useState } from "react";

function useThrottleValue<T>(
  init: T | undefined,
  wait: number = 1000
): T | undefined {
  const [value, setValue] = useState(init);

  useEffect(() => {
    update(init);
  }, [init]);

  const update = useMemo(() => {
    let time = Date.now();
    return function (newValue: T | undefined) {
      if (Date.now() - time < wait) return;
      setValue(newValue);
      time = Date.now();
    };
  }, []);

  return value;
}

export default useThrottleValue;
