import { useMemo } from "react";

function useKebabCase(str: string, line: string = "-"): string {
  return useMemo(() => {
    const regExp = new RegExp(`([^${line}])([A-Z])`, "g");
    return str
      .replace(regExp, `$1${line}$2`)
      .replace(regExp, `$1${line}$2`)
      .toLowerCase();
  }, [str, line]);
}

export default useKebabCase;
