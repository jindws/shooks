import { useCallback, useState } from "react";

function useUpdate() {
  const [, upData] = useState({});
  return useCallback(() => {
    upData({});
  }, []);
}

export default useUpdate;
