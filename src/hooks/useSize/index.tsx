import { MutableRefObject, useEffect, useState } from "react";

function useSize(
  ref: MutableRefObject<HTMLElement | null> | HTMLElement | null
): [number, number] {
  const [data, setData] = useState([0, 0] as [number, number]);
  if (!window.ResizeObserver) {
    return data;
  }
  useEffect(() => {
    let dom: Element;
    if (!ref) return;
    else if ("current" in ref) {
      if (!ref.current) return;
      dom = ref.current;
    } else dom = ref;
    const resizeObserver = new ResizeObserver((data) => {
      const { width, height } = data[0].contentRect;
      setData([width, height]);
    });
    console.log("don", dom);
    resizeObserver.observe(dom);
    return () => resizeObserver.unobserve(dom);
  }, []);
  return data;
}

export default useSize;
