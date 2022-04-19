import { useLocalStorage } from "../../index";
import { useCallback, useEffect, useState } from "react";

function useFetch(
  url: string,
  options: RequestInit = {}
): [
  any,
  {
    request: () => void;
    loading: boolean;
  }
] {
  const [val, { set }] = useLocalStorage(url);
  const [data, upData] = useState();
  const [loading, upLoading] = useState(true);
  useEffect(() => {
    request();
  }, []);
  const request = useCallback(() => {
    upLoading(true);
    fetch(url, options)
      .then((data) => data.json())
      .then((data) => {
        set(data);
        upData(data);
      })
      .catch(() => {
        console.log("请求失败,尝试本地数据", url, val);
        upData(val);
      })
      .then(() => upLoading(false));
  }, []);
  return [
    data,
    {
      request,
      loading,
    },
  ];
}

export default useFetch;
