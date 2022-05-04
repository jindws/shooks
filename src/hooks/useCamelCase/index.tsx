import { useMemo } from "react";

function useCamelCase(str: string, line: string = "-"): string {
  return useMemo(() => {
    return str
      .replace(new RegExp(`\\${line}+(.?)`, "g"), (itm) => itm.toUpperCase())
      .replace(new RegExp(`\\${line}`, "g"), "");
  }, [str, line]);
}

export default useCamelCase;
