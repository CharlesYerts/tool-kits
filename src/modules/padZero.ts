/*
 * @Author: yeertesi
 * @Date: 2023-04-10 05:03:29
 * @LastEditTime: 2023-04-10 05:03:49
 * @LastEditors: yeertesi
 * @Description: 向 < 10 的整形数值进行补 0
 * @FilePath: /tool-kits/src/modules/padZero.ts
 */
/**
 * @description: 向 < 10 的整形数值进行补 0
 * @param {number} n 补零之后的内容
 * @return {*}
 */
export function padZero(n: number) {
  if (!Number.isInteger(n)) {
    return n
  }
  return (n < 10 ? `0${n}` : String(n))
}