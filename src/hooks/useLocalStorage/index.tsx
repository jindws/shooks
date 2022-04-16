import useStorage from "../base/useStorage";

export interface Actions {
  reset: () => void;
  set: (value: unknown) => void;
}

function useLocalStorage(
  key: string,
  options?: {
    defaultValue?: unknown;
    force?: boolean;
  }
): [any, Actions] {
  return useStorage(localStorage, key, options);
}

export default useLocalStorage;
