import { useMemo } from "react";

/**
 * 从大到小
 * @param versions
 * @param options
 */
function useVersions(
  versions: string[],
  options: { quota?: string } = {}
): string[] {
  // return useMemo(() => {
  //   const vlist = versions.map((itm) => itm.split(options.quota || "."));
  //
  //
  //   versions.sort((a, b) => {
  //     if (a === b) return 0;
  //   });
  //   return versions;
  // }, []);
  return versions;
}

export default useVersions;
