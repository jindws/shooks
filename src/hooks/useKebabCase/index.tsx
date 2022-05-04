import { useMemo } from "react";

function useKebabCase(str: string, line: string = "-"): string {
  return useMemo(() => {
    return str
      .replace(new RegExp(`([^${line}])([A-Z])`, "g"), `$1${line}$2`)
      .replace(new RegExp(`([^${line}])([A-Z])`, "g"), `$1${line}$2`)
      .toLowerCase();
  }, [str, line]);
}

export default useKebabCase;
