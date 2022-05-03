/**
 * @desc 支持await的useEffect
 */
import { useEffect } from "react";

function useAsyncEffect(fn: Awaited<any> | Promise<void>, deps?: []) {
  useEffect(() => {
    (async function fun() {
      await fn();
    })();
  }, deps);
}

export default useAsyncEffect;
