import { useMemo, useState } from "react";

function useDebounce<T>(
  init: T | undefined,
  wait: number = 1000
): [T | undefined, (value: T) => void] {
  const [value, setValue] = useState(init);

  const update = useMemo(() => {
    let last: number | undefined;
    return function (newValue: T) {
      clearTimeout(last);
      last = setTimeout(() => setValue(newValue), wait);
    };
  }, []);

  return [value, update];
}

export default useDebounce;
