/**
 * @desc 取色,仅chrome内核支持
 */
import { useCallback, useEffect, useMemo, useState } from "react";

function useEyeDropper(): [string | undefined, () => void] {
  const [color, setColor] = useState<string>();

  const eyeDropper = useMemo(() => {
    if ((window as any).EyeDropper) {
      return new (window as any).EyeDropper();
    }
  }, []);
  const getColor = useCallback(() => {
    if (!eyeDropper) {
      return console.error("EyeDropper API is not supported on this platform");
    }
    eyeDropper
      .open()
      .then(({ sRGBHex }: { sRGBHex: string }) => setColor(sRGBHex))
      .catch(console.log);
  }, []);
  return [color, getColor];
}

export default useEyeDropper;
