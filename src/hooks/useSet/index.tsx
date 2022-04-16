import { useMemo, useState } from "react";

function useSet<K>(init?: []) {
  const intiData = useMemo(() => {
    if (!init || !Array.isArray(init)) return new Set();
    return new Set(init);
  }, []);
  const [set, setSet] = useState(intiData);

  const remove = (itm: K) => {
    setSet((prev) => {
      set.delete(itm);
      return set;
    });
  };

  const add = (itm: K) => {
    setSet((prev) => {
      const temp = new Set(prev);
      temp.add(itm);
      return temp;
    });
  };
  const clear = () => {
    setSet((prev) => {
      return new Set();
    });
  };

  const reset = () => setSet(new Set(intiData));

  const has = (itm: K) => {
    return set.has(itm);
  };

  const size = useMemo(() => set.size, [set]);

  return [
    set,
    {
      add,
      remove,
      clear,
      reset,
      has,
      size,
    },
  ];
}

export default useSet;
