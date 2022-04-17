import { MutableRefObject, useEffect, useMemo, useState } from "react";

interface IAction {
  enterFullscreen: () => void;
  exitFullscreen: () => void;
  toggleFullscreen: () => void;
  isEnabled: boolean;
}

type func = () => Element;

function useFullScreen(
  ele?: func | MutableRefObject<undefined | HTMLElement>
): [boolean, IAction] {
  const [isFullScreen, upIsFullScreen] = useState(!!document.fullscreenElement);

  const isEnabled = useMemo(() => document.fullscreenEnabled, []);
  useEffect(() => {
    document.onfullscreenchange = function () {
      upIsFullScreen(!!document.fullscreenElement);
    };
    return () => (document.onfullscreenchange = null) as any;
  }, []);
  const action = useMemo(() => {
    const enterFullscreen = function () {
      let element: Element | MutableRefObject<HTMLElement | undefined> =
        document.documentElement;
      if (typeof ele === "function") element = ele();
      else if (ele) {
        if ("current" in ele)
          element = (ele as MutableRefObject<HTMLElement>).current;
        else element = ele;
      }
      element &&
        (element as HTMLElement).requestFullscreen({
          // navigationUI: "show",
        });
    };
    const exitFullscreen = function () {
      if (document.fullscreenElement) {
        return document.exitFullscreen();
      }
    };
    const toggleFullscreen = function () {
      if (document.fullscreenElement) return exitFullscreen();
      else return enterFullscreen();
    };
    return { enterFullscreen, exitFullscreen, toggleFullscreen, isEnabled };
  }, []);
  return [isFullScreen, action];
}

export default useFullScreen;
