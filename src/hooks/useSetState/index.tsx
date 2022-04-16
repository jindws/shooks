import { useState } from "react";

type TData<T> = ((data: T) => T) | Record<string, unknown>;

function useSetState<T extends Record<string, unknown>>(
  data: Partial<T>
): [Partial<T>, (newData: TData<Partial<T>>) => void] {
  const [state, setState] = useState(data);
  function update(newData: TData<Partial<T>>) {
    setState((prevDate) => {
      const data = typeof newData === "function" ? newData(prevDate) : newData;
      return { ...state, ...data };
    });
  }
  return [state, update];
}

export default useSetState;
