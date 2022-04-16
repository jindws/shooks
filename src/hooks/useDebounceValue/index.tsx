import { useEffect, useMemo, useState } from "react";

function useDebounceValue<T>(
  init: T | undefined,
  wait: number = 1000
): T | undefined {
  const [value, setValue] = useState(init);

  useEffect(() => {
    update(init);
  }, [init]);

  const update = useMemo(() => {
    let last: number | undefined;
    return function (newValue: T | undefined) {
      clearTimeout(last);
      last = setTimeout(() => {
        setValue(newValue);
      }, wait);
    };
  }, []);

  return value;
}

export default useDebounceValue;
