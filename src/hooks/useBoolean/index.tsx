import { useMemo, useState } from "react";

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (val?: boolean) => void;
  toggle: () => void;
}

function useBoolean(init?: boolean):[boolean,Actions] {
  const intiData = useMemo(() => {
    return !!init
  }, []);
  const [state, setState] = useState(intiData);
  const actions: Actions = useMemo(() => {
    const setTrue = () => setState(true);
    const setFalse = () => setState(false);
    const toggle = () => setState(prevState=>!prevState);
    return {
      toggle,
      set: (val?:boolean) => setState(!!val),
      setTrue,
      setFalse,
    };
  }, []);

  return [
    state,
    actions,
  ];
}

export default useBoolean;
