import { MutableRefObject, useCallback, useEffect, useState } from "react";
import { useLatest } from "../../index";

/**
 * @desc 画中画API
 * @param video
 */
function usePictureInPicture(
  video: HTMLVideoElement | MutableRefObject<HTMLVideoElement | undefined>
): [
  show: boolean,
  action: {
    open: () => void;
    close: () => void;
    toggle: () => void;
  }
] {
  const [show, setShow] = useState(false);
  const [myVideo, setMyVideo] = useState<any>();

  const _video = useLatest(myVideo);

  const upShow = useCallback((s: boolean) => {
    setShow(s);
  }, []);

  useEffect(() => {
    if ("current" in video) {
      setMyVideo(video.current);
    } else {
      setMyVideo(video);
    }
  }, [video]);

  useEffect(() => {
    if (_video.current) {
      let toShow = upShow.bind(null, true);
      let toHide = upShow.bind(null, false);
      _video.current.addEventListener("enterpictureinpicture", toShow);
      _video.current.addEventListener("leavepictureinpicture", toHide);
      return () => {
        _video.current.removeEventListener("enterpictureinpicture", toShow);
        _video.current.removeEventListener("leavepictureinpicture", toHide);
      };
    }
  }, [_video.current]);

  const close = useCallback(() => {
    if (document.pictureInPictureElement === _video.current) {
      document.exitPictureInPicture().then();
    }
  }, []);

  const open = useCallback(() => {
    if (document.pictureInPictureEnabled) {
      _video.current.requestPictureInPicture().catch((e: Error) => {
        console.log(e);
      });
    }
  }, []);

  const toggle = useCallback(() => {
    if (document.pictureInPictureElement === _video.current) {
      close();
    } else {
      open();
    }
  }, []);

  return [
    show,
    {
      open,
      close,
      toggle,
    },
  ];
}

export default usePictureInPicture;
