import { MutableRefObject, useEffect, useRef, useState } from "react";

function useHover(
  dom: MutableRefObject<HTMLElement> | HTMLElement | Document,
  options: {
    onHover?: () => void;
    onLeave?: () => void;
  } = {}
): boolean {
  const [hover, setHover] = useState<boolean>(false);
  useEffect(() => {
    if ("current" in dom) dom = dom.current;
    const enterFn = () => {
      setHover(true);
      options.onHover?.();
    };
    const leaveFn = () => {
      setHover(false);
      options.onLeave?.();
    };
    dom.addEventListener("mouseenter", enterFn);
    dom.addEventListener("mouseleave", leaveFn);

    return () => {
      if ("current" in dom) dom = dom.current;
      dom.removeEventListener("mouseenter", enterFn);
      dom.removeEventListener("mouseleave", leaveFn);
    };
  }, []);

  return hover;
}

export default useHover;
