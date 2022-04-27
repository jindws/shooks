/**
 * @desc 调用系统通知
 */
import { useCallback, useEffect, useMemo, useState } from "react";

interface IMsgO {
  body?: string;
  icon?: string;
  dir?: "auto" | "ltr" | "rtl";
  lang?: string;
  tag?: string;
}

function useNotification(
  tacitly: boolean = false
): [boolean | "", (title: string | number, options?: IMsgO) => void] {
  const [permission, setPermission] = useState(Notification.permission);
  const init = useCallback(() => {
    return Notification.requestPermission();
  }, []);
  useEffect(() => {
    if (tacitly) {
      init().then(setPermission);
    }
  }, [tacitly]);

  const message = useCallback(
    (title: string | number = "通知", options?: IMsgO) => {
      init().then(() => {
        new Notification(String(title), options);
      });
    },
    []
  );

  const canSend = useMemo(() => {
    switch (permission) {
      case "granted":
        return true;
      case "denied":
        return false;
      default:
        return "";
    }
  }, [permission]);
  return [canSend, message];
}

export default useNotification;
