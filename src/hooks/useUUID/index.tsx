/**
 * @desc 获取uuid
 */
import { useCallback, useEffect, useState } from "react";

function useUUID(
  len: number | number[] = [8, 4, 4, 4, 12]
): [string, () => void] {
  const [value, setValue] = useState("");
  const getRandom = useCallback((len: number = 0) => {
    let result = "";
    while (len > 0) {
      result += Math.random().toString(16).substr(2, Math.min(10, len));
      len -= 10;
    }
    return result;
  }, []);

  useEffect(() => {
    refresh();
  }, []);
  const refresh = useCallback(() => {
    if (Array.isArray(len)) {
      let result = [];
      for (let itm of len) {
        result.push(getRandom(itm));
      }
      setValue(result.join("-"));
    } else {
      setValue(getRandom(len));
    }
  }, []);
  return [value, refresh];
}

export default useUUID;
