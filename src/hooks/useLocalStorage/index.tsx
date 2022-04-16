import {useEffect, useMemo, useState} from "react";

export interface Actions {
  reset: () => void;
  set:(value:unknown)=>void
}

function useLocalStorage(key: string,options?:{
  defaultValue?:unknown,
  force?:boolean
}):[any,Actions] {
  const init = useMemo(()=>{
    const localData = localStorage[key];
    const {force,defaultValue} = options||{}
    if(defaultValue!==undefined){
      if(localData&&!force){
        return JSON.parse(localStorage[key])
      }
      localStorage[key] = JSON.stringify(defaultValue)
      return defaultValue
    }
    if(force||!localData){
      return ''
    }
    return JSON.parse(localStorage[key])
  },[])
  const [state, setState] = useState(init);

  useEffect(()=>{
    localStorage[key] = JSON.stringify(state)
  },[state])

  const actions = useMemo(()=>{
    const reset = ()=>setState(init)
    const set = (value: unknown)=>setState(value)
    return {reset,set}
  },[])

  return [
    state,
    actions,
  ];
}

export default useLocalStorage;
