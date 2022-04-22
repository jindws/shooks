import { useCallback, useEffect, useRef } from "react";
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

    // return () => {
    //   Reflect.deleteProperty(window, backName || random);
    // };
  }, []);
  const run = useCallback((cbName: string) => {
    const script = document.createElement("script");
    if (callback) {
      url += url.includes("?") ? "&" : "?";
      url += `${reqName}=${random}`;
      Object.assign(window, { [cbName]: callback });
    }
    script.src = url;
    script.async = true;
    script.onload = () => {
      // Reflect.deleteProperty(window, cbName);
      document.body.removeChild(script);
    };
    document.body.append(script);
  }, []);
}

export default useJSONP;
