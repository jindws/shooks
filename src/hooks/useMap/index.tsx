import { useMemo, useState } from "react";

function useMap<K, V>(init?: any) {
  const intiData = useMemo(() => {
    if (!init || !Array.isArray(init)) return new Map();
    return new Map(init);
  }, []);
  const [map, setMap] = useState(intiData);

  const remove = (key: K) => {
    setMap((prev) => {
      const temp = new Map(prev);
      temp.delete(key);
      return temp;
    });
  };

  const set = (key: K, value: V) => {
    setMap((prev) => {
      const temp = new Map(prev);
      temp.set(key, value);
      return temp;
    });
  };
  const clear = () => {
    setMap((prev) => {
      const temp = new Map(prev);
      temp.clear();
      return temp;
    });
  };

  const reset = () => setMap(new Map(intiData));

  const has = (key: K) => {
    return map.has(key);
  };

  const size = useMemo(() => map.size, [map]);

  return [
    map,
    {
      set,
      remove,
      clear,
      reset,
      has,
      size,
    },
  ];
}
export default useMap;
