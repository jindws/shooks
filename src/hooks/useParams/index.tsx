/**
 * @desc location.search or params
 */
import { useMemo } from "react";
import Params from "../base/params";

function useParams(
  params: string = location.search
): Record<string, string | string[]> {
  return useMemo(() => {
    return Params(params);
  }, [params]);
}

export default useParams;
