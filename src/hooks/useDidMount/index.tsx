import { useEffect } from "react";

function useDidMount(callback: () => (() => void) | void): void {
  useEffect(() => {
    callback?.();
  }, []);
}

export default useDidMount;
