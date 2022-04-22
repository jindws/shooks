import { useEffect, useRef } from "react";

function useOnlyUpdateEffect(
  callback: () => (() => void) | void,
  deps?: [any]
): void {
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

export default useOnlyUpdateEffect;
