import useStorage from "../base/useStorage";

export interface Actions {
  reset: () => void;
  set: (value: unknown) => void;
}

function useSessionStorage(
  key: string,
  options?: {
    defaultValue?: unknown;
    force?: boolean;
  }
): [any, Actions] {
  return useStorage(sessionStorage, key, options);
}

export default useSessionStorage;
