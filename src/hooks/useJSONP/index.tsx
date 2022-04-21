import { useCallback, useEffect } from "react";
import useUUID from "../useUUID";

function useJSONP(
  url: string,
  options: {
    callback?: (...args: any[]) => void;
    reqName?: string;
    backName?: string;
  } = {}
) {
  const { callback, reqName = "callback", backName } = options;
  const [random]: [string, () => void] = useUUID(10);
  useEffect(() => {
    if (backName) {
      run(backName);
    } else {
      random && run(random.replace(/^\d*/, ""));
    }

    return () => {
      Reflect.deleteProperty(window, backName || random);
    };
  }, [backName || random]);
  const run = useCallback((random: string) => {
    const script = document.createElement("script");
    if (callback) {
      url += url.includes("?") ? "&" : "?";
      url += `${reqName}=${random}`;
      Object.assign(window, { [random]: callback });
    }
    script.src = url;
    document.body.append(script);
  }, []);
}

export default useJSONP;
