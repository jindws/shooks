/**
 * @desc input focus事件
 */
import { MutableRefObject, useCallback, useEffect, useState } from "react";

function useFocus(
  target: MutableRefObject<HTMLInputElement | null> | HTMLInputElement,
  options?: {
    onFocus?: () => void;
    onBlur?: () => void;
  }
): boolean {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const { onFocus, onBlur } = options || {};
  const focusIn = useCallback(() => {
    onFocus?.();
    setIsFocus(true);
  }, []);
  const focusOut = useCallback(() => {
    onBlur?.();
    setIsFocus(false);
  }, []);

  useEffect(() => {
    if ("current" in target) target = target.current as HTMLInputElement;
    target.addEventListener("focusin", focusIn);
    target.addEventListener("focusout", focusOut);
    return () => {
      if ("current" in target) target = target.current as HTMLInputElement;
      target.removeEventListener("focusin", focusIn);
      target.removeEventListener("focusout", focusOut);
    };
  }, []);
  return isFocus;
}

export default useFocus;
