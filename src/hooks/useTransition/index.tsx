/**
 * @desc CSS3 transition
 */
import { useEffect } from "react";

function useTransition(
  newStyle: any,
  options: {
    duration: number;
    delay: number;
    timingFunction: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
  }
) {
  const { duration = 1000, delay = 0 } = options;
  useEffect(() => {
    const style = document.createElement("style");
  }, []);
}

export default useTransition;
