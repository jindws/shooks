/**
 * @desc 请求多个链接,最快返回结果
 */
import { useCallback, useMemo, useState } from "react";
import { useAsyncEffect } from "../../index";
import Fetch from "../base/fetch";

function useRequestAny(
  url: string | string[],
  options: RequestInit = {}
): [any, { loading: boolean; update: () => void }] {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const urls = useMemo(() => {
    if (Array.isArray(url)) return url;
    return [url];
  }, []);

  const list = useMemo(() => {
    const list = [];
    for (let url of urls) {
      list.push(Fetch(url, options));
    }
    return list;
  }, [urls]);

  const update = useCallback(async () => {
    setLoading(true);
    const data = await Promise.any(list);
    setData(data);
    setLoading(false);
  }, [list]);

  useAsyncEffect(async () => {
    await update();
  }, []);

  return [
    data,
    {
      loading,
      update,
    },
  ];
}

export default useRequestAny;
