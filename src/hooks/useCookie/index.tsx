import { useCallback, useEffect, useMemo, useState } from "react";
import Params from "../base/params";

function useCookie(
  key: string,
  options?: {
    defaultValue?: string | number;
    expires?: Date | number;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: "strict" | "lax" | "none";
  }
): [string, (val: string | number) => void] {
  let {
    defaultValue = "",
    expires,
    path,
    domain,
    secure,
    sameSite,
  } = options || {};
  const [value, setValue] = useState(String(defaultValue));
  useEffect(() => {
    if (options?.defaultValue) {
      update(defaultValue);
    } else {
      const cookie = Params(document.cookie);
      let value = cookie[key];
      if (Array.isArray(value)) value = value[0];
      setValue(value);
    }
  }, []);
  const cook = useMemo(() => {
    let cook = ``;
    if (expires) {
      if (typeof expires === "number") {
        expires = Date.now() + expires;
      }
      cook += `expires=${new Date(expires)};`;
    }
    if (path) {
      cook += `path=${path};`;
    }
    if (domain) {
      cook += `domain=${domain};`;
    }
    if (secure) {
      cook += `secure;`;
    }
    if (sameSite) {
      cook += `sameSite=${sameSite};`;
    }
    return cook;
  }, [options]);
  const update = useCallback((value: any) => {
    document.cookie = `${key}=${value};` + cook;
    setValue(value);
  }, []);
  return [value, update];
}

export default useCookie;
