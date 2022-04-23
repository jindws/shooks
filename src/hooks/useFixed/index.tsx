import { useMemo } from "react";

function useFixed(num: string | number, fixed: number = 1): number {
  return useMemo(() => {
    return Math.round(+num * 10 ** fixed) / 10 ** fixed;
  }, [num, fixed]);
}

export default useFixed;
