import { useCallback, useEffect } from "react";
import useUUID from "../useUUID";

function useJSONP(
  url: string,
  fn?: (...args: unknown[]) => void,
  callback: string = "callback"
) {
  const [random]: [string, () => void] = useUUID(10);
  useEffect(() => {
    random && run(random.replace(/^\d*/, ""));
    return () => {
      Reflect.deleteProperty(window, random);
    };
  }, [random]);
  const run = useCallback((random: string) => {
    const script = document.createElement("script");
    if (fn) {
      url += url.includes("?") ? "&" : "?";
      url += `${callback}=${random}`;
      Object.assign(window, { [random]: fn });
    }
    script.src = url;
    document.body.append(script);
  }, []);
}

export default useJSONP;
