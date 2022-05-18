import { useMemo } from "react";

function useRGB2Hex(r: number, g: number, b: number): string {
  return useMemo(() => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }, [r, g, b]);
}

export default useRGB2Hex;
