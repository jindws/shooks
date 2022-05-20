import { DependencyList, EffectCallback, useLayoutEffect, useRef } from "react";

function useUpdateLayoutEffect(
  callback: EffectCallback,
  deps?: DependencyList
) {
  const ref = useRef(false);
  const back: any = useRef(null);
  useLayoutEffect(() => {
    if (ref.current) {
      back.current && back.current();
      back.current = callback();
    } else {
      ref.current = true;
    }
  }, [deps]);
}

export default useUpdateLayoutEffect;
