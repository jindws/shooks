import { useCallback } from "react";

function useDeepClone<T>(init?: T): T {
  const deepClone = useCallback(
    (originValue: any, map = new WeakMap()) => {
      const type: string = Object.prototype.toString.call(originValue);
      const dataType = type.split(" ")[1].replace("]", "");

      if (map.has(originValue)) {
        return map.get(originValue);
      }

      switch (dataType) {
        case "Set": //Set类型
          return new Set([...originValue]);
        case "Map": //Map类型
          return new Map([...originValue]);
        case "Symbol":
          return Symbol(originValue.description);
        case "Function":
          return originValue;
        case "Array":
          let newArr: unknown[] = [];
          map.set(originValue, newArr);
          for (let key in originValue) {
            newArr[+key] = deepClone(originValue[key], map);
          }
          return newArr;
        case "Object":
          let newObj: Record<string, unknown> = {};
          map.set(originValue, newObj);
          for (let key in originValue) {
            newObj[key] = deepClone(originValue[key], map);
          }
          return newObj;
        default:
          return originValue;
      }
    },
    [init]
  );
  return deepClone(init);
}

export default useDeepClone;
