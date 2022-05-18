import { useMemo } from "react";

function useHexToRgba(
  hex: string,
  opacity: number = 1
): [rgba: string, colors: { red: number; green: number; blue: number }] {
  return useMemo(() => {
    const [red, green, blue] = (hex.match(/\w{2}/g) || []).map(
      (itm) => +`0x${itm}`
    );

    return [
      `rgba(${red},${green},${blue},${opacity})`,
      {
        red,
        green,
        blue,
      },
    ];
  }, [hex, opacity]);
}

export default useHexToRgba;
