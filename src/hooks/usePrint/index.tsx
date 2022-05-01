/**
 * @desc 打印
 */
import { MutableRefObject, useCallback, useEffect, useState } from "react";
import "./index.scss";
import { useLatest } from "../../index";

function usePrint(
  ele: MutableRefObject<HTMLElement> | HTMLElement = document.body
) {
  const [element, setElement] = useState(document.body);
  const elem = useLatest(element);
  useEffect(() => {
    if (ele) {
      setElement("current" in ele ? ele.current : ele);
    }
  }, []);

  return useCallback(() => {
    let style, tag;
    if (elem.current !== document.body) {
      elem.current.setAttribute("shooks_print", "");
      const position =
        window.getComputedStyle(elem.current).position || "relative";
      style = document.createElement("style");
      if (!["relative", "fixed", "absolute"].includes(position)) {
        style.innerHTML = `
        @media print {
          [shooks_print]{
            position: relative;
          }
        }
      `;
      }
      document.head.appendChild(style);

      tag = document.createElement("a");
      tag.className = "shooks_print";
      document.body.appendChild(tag);
    }

    window.print();
    if (style && elem.current && tag) {
      document.head.removeChild(style);
      elem.current.removeAttribute("shooks_print");
      document.body.removeChild(tag);
    }
  }, []);
}

export default usePrint;
