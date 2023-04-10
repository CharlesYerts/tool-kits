/*
 * @Author: yeertesi
 * @Date: 2023-04-10 05:05:48
 * @LastEditTime: 2023-04-11 05:17:03
 * @LastEditors: yeertesi
 * @Description: 用于打印数据的工具函数
 * @FilePath: /tool-kits/src/modules/kitConsole.ts
 */
/**
 * @description: 用于打印数据的工具函数
 * @param {unknown} content 打印的内容
 * @return {*}
 */
export function kitConsole(content: unknown) {
  // 用于测试babel配置是否生效，生效的话箭头函数会被转换成匿名函数
  const temp = [1, 2, 3].map(n => n + 1);
  console.log({ temp })

  console.log('---------- from kitConsole -----------')
  console.log({ content })
  console.log(`--------------------------------------\n`)
}