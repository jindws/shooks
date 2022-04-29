/**
 * @desc 根据ip地址获取定位信息
 */
import { useCallback, useMemo, useState } from "react";
import useJSONP from "../useJSONP";

function useIPPlace() {
  const [data, setData] = useState({
    pro: "",
    city: "",
  });
  const getData = useCallback(setData, []);
  useJSONP("https://whois.pconline.com.cn/ipJson.jsp", {
    callback: getData,
    backName: "IPCallBack",
  });

  const { pro, city } = useMemo(() => {
    return data;
  }, [data]);
  return [pro, city];
}

export default useIPPlace;
