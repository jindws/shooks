import { useEffect, useState } from "react";

function useFavicon(init: string): [string, (newUrl: string) => void] {
  const [url, setUrl] = useState(init);

  useEffect(() => {
    if (!url) return;
    const link: HTMLLinkElement =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.rel = "shortcut icon";
    link.href = url;
    document.head.append(link);
  }, [url]);

  function update(newUrl: string) {
    if (newUrl) {
      setUrl(newUrl);
    }
  }
  return [url, update];
}

export default useFavicon;
