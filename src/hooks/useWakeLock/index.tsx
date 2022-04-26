import { useEffect, useState } from "react";

function useWakeLock(time: number = 1): boolean {
  const [lock, setLock] = useState<any>();
  if ("wakeLock" in navigator) {
    useEffect(() => {
      (navigator as any).wakeLock.request("screen").then(setLock);
      return () => lock && lock.release();
    }, []);

    useEffect(() => {
      if (!lock) return;
      const st = setTimeout(lock.release, time * 60 * 1000);
      return () => {
        clearTimeout(st);
      };
    }, [time, lock]);
    return true;
  }
  return false;
}

export default useWakeLock;
