/*
 * @Author: yeertesi
 * @Date: 2023-04-10 05:33:22
 * @LastEditTime: 2023-04-10 05:44:55
 * @LastEditors: yeertesi
 * @Description: 文件描述
 * @FilePath: /tool-kits/test/index.js
 */
/******* 
 * @description: 测试CommonJS
 * 跑这一段内容的时候需要将package.json中的type改为commonjs
 * @return {*}
 */
// const { kitConsole } = require('../dist/index.js')

/******* 
 * @description: 测试ESModule
 * @return {*}
 */
import { kitConsole } from '../dist/index.mjs.js'

kitConsole({ name: 'yerts' })

