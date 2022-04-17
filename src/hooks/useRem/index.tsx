/**
 * @desc 辅助设置html的font-size
 */
import { useCallback, useEffect, useState } from "react";

interface IOption {
  baseWidth: number;
  baseFontSize: number;
  maxWidth: number;
}
function useRem(options?: IOption): number {
  const {
    baseWidth = 375,
    baseFontSize = 16,
    maxWidth = innerWidth,
  } = options || {};
  const [data, setData] = useState(0);
  const resize = useCallback(() => {
    const size = (Math.min(innerWidth, maxWidth) / baseWidth) * baseFontSize;
    setData(size);
    document.documentElement.style.fontSize = `${size}px`;
  }, []);
  useEffect(() => {
    resize();
    addEventListener("resize", resize);
    return () => removeEventListener("resize", resize);
  }, []);
  return data;
}

export default useRem;
