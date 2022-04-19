import { useEffect, useState } from "react";

function useRequest(fn: (...args: any) => any): [any] {
  const [data, upData] = useState();
  useEffect(() => {
    fn().then(upData);
  }, []);
  return [data];
}

export default useRequest;
