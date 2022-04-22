import { useCallback, useState } from "react";

function useLegacyState<T extends Record<string, unknown>>(
  init: T
): [T, (newData: Record<string, unknown>) => void] {
  const [data, setData] = useState(init);

  const update = useCallback(
    (newData: Record<string, unknown>) => {
      setData({ ...data, ...newData });
    },
    [data]
  );

  return [data, update];
}

export default useLegacyState;
