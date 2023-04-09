/*
 * @Author: yeertesi
 * @Date: 2023-04-10 05:04:52
 * @LastEditTime: 2023-04-10 05:04:53
 * @LastEditors: yeertesi
 * @Description: 通过检测设备 ua 判断是否是移动端设备
 * @FilePath: /tool-kits/src/modules/isMobileByUa.ts
 */
/**
 * 通过检测设备 ua 判断是否是移动端设备
 * @returns {boolean}
 */
export function isMobileByUa(userAgent = window.navigator.userAgent) {
  const reg = /(Android|iPhone|Windows Phone|iPad|webOS|BlackBerry|mobile)/i
  return reg.test(userAgent)
}
