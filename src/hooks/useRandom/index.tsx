/**
 * @desc ιζΊθ·ε
 */
import { useMemo, useState } from "react";

function useRandom(...data: unknown[]): [unknown, () => void] {
  const length = useMemo(() => data.length, [data]);
  const [result, upResult] = useState<unknown>(
    data[Math.floor(Math.random() * length)]
  );

  function update() {
    const it: unknown = data[Math.floor(Math.random() * length)];
    upResult(it);
  }

  return [result, update];
}

export default useRandom;
