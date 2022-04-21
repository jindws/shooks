/**
 * @desc 获取ip
 */
import { useCallback, useEffect, useState } from "react";
import useJSONP from "../useJSONP";

function useIP() {
  const [ip, setIp] = useState("");
  const getData = useCallback((data: any) => {
    setIp(data.ip);
  }, []);
  useJSONP("https://www.taobao.com/help/getip.php", {
    callback: getData,
    backName: "ipCallback",
  });
  return ip;
}

export default useIP;
