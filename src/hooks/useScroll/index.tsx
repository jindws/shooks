import { MutableRefObject, useEffect, useMemo, useState } from "react";

function useScroll(
  ref: MutableRefObject<HTMLElement | null> | Document
): [number, number] {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const isRef = useMemo(() => {
    return "current" in ref;
  }, []);

  useEffect(() => {
    const dom: HTMLElement | Document = isRef
      ? (ref as MutableRefObject<HTMLElement>).current
      : (ref as Document);
    if (!dom) return;
    dom.onscroll = function () {
      let ele: Element | Document = dom;
      if (!isRef) {
        ele = (ele as Document).scrollingElement as Element;
      }
      let { scrollLeft, scrollTop } = ele as HTMLElement;
      setLeft(scrollLeft);
      setTop(scrollTop);
    };
  }, []);

  return [left, top];
}

export default useScroll;
