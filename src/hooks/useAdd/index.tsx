/**
 * @desc 大数相加
 */
import { useEffect, useState } from "react";

function useAdd(
  ...nums: (number | string)[]
): [string | number, (num: number | string) => void] {
  const [result, setResult] = useState(nums[0] || 0);

  function addNow(...nums: (string | number)[]) {
    if (nums.length <= 1) return;
    const arr: string[][] = [];
    let maxL = 0;
    nums.forEach((itm) => {
      itm = String(itm);
      arr.push(itm.split("").reverse());
      if (itm.length > maxL) maxL = itm.length;
    });
    let result: any = new Array(maxL + 1).fill(0).map(() => [0]);
    for (let i = 0; i < maxL; i++) {
      for (let itm of arr) {
        result[i].push(itm[i] || 0);
      }
      result[i] = result[i].reduce((a: string, b: string) => +a + +b);
      result[i + 1] = [Math.floor(result[i] / 10)];
      result[i] = result[i] % 10;
    }

    result[maxL] = result[maxL].reduce((a: string, b: string) => +a + +b);
    setResult(result.reverse().join("").replace(/^0*/g, ""));
  }

  useEffect(() => addNow(...nums), []);

  function add(num: number | string) {
    addNow(result, num);
  }

  return [result, add];
}

export default useAdd;
