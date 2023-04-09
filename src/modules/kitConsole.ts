/*
 * @Author: yeertesi
 * @Date: 2023-04-10 05:05:48
 * @LastEditTime: 2023-04-10 05:05:48
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
  console.log('---------- from kitConsole -----------')
  console.log({ content })
  console.log(`--------------------------------------\n`)
}