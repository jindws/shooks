import { useMemo } from "react";

/**
 * 替换字符串所有的空格
 * @param str
 * @param rep
 * @param normalFirst
 */
function useTrims(
  str: string,
  rep: string = "",
  normalFirst: boolean = true
): string {
  return useMemo(() => {
    if (normalFirst) str = str.trim();
    return str.replace(/ /g, rep);
  }, [str, rep, normalFirst]);
}

export default useTrims;
