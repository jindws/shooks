import { DependencyList, EffectCallback, useEffect, useRef } from "react";

function useDidUpdate(callback: EffectCallback, deps?: DependencyList): void {
  const ref = useRef(false);
  const back: any = useRef(null);
  useEffect(() => {
    if (ref.current) {
      back.current && back.current();
      back.current = callback();
    } else {
      ref.current = true;
    }
  }, [deps]);
}

export default useDidUpdate;
