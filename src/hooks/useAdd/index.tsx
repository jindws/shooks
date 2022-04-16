/**
 * @desc 大数相加
 */
function useAdd(...nums: (number | string)[]): string | number {
  if (nums.length <= 1) return nums[0] || 0;
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
  return result.reverse().join("").replace(/^0*/g, "");
}

export default useAdd;
