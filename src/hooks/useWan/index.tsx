import { useMemo } from "react";

function useWan(
  num: number | string,
  step: number = 4
  // fixed: number = 1
): [number | string, boolean] {
  const result = useMemo(() => {
    if (Math.abs(+num) < 10 ** step || step <= 0) return num;
    const reg = new RegExp(`\\d{${step + 1}}(\\.\\d+|)$`);
    return num.toString().replace(reg, (itm) => `${itm[0]}.${itm[1]}`); //.toFixed(fixed);
  }, [num, step]);
  return [result, result !== num];
}

export default useWan;
