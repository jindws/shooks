/**
 * @desc location.search or params
 */
import { useMemo } from "react";

function useParams(
  params: string = location.search
): Record<string, string | string[]> {
  return useMemo(() => {
    const arr = params.match(/[^?&]+\=[^&]*/g) || [];
    const result: Record<string, string | string[]> = {};
    for (let itm of arr) {
      const [k, v] = itm.split("=");
      if (k in result) {
        if (Array.isArray(result[k])) {
          (result[k] as string[]).push(v);
        } else {
          result[k] = [result[k] as string, v];
        }
      } else {
        result[k] = v;
      }
    }
    return result;
  }, [params]);
}

export default useParams;
