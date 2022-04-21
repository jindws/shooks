/**
 * @desc 获取ip
 */
import { useCallback, useState } from "react";
import useJSONP from "../useJSONP";

function useIP() {
  const [ip, setIp] = useState("");
  const getData = useCallback((data: { ip: string }) => {
    setIp(data.ip);
  }, []);
  useJSONP("https://www.taobao.com/help/getip.php", {
    callback: getData,
    backName: "ipCallback",
  });
  return ip;
}

export default useIP;
