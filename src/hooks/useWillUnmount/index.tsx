import { useEffect } from "react";
import { useLatest } from "../../index";

function useWillUnmount(callback: () => (() => void) | void): void {
  const fn = useLatest(callback);
  useEffect((): (() => void) => {
    return () => fn.current?.();
  }, []);
}

export default useWillUnmount;
