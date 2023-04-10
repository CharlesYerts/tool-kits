/*
 * @Author: yeertesi
 * @Date: 2023-04-10 03:35:24
 * @LastEditTime: 2023-04-11 04:47:27
 * @LastEditors: yeertesi
 * @Description: CommonJS打包配置文件
 * @FilePath: /tool-kits/config/rollup.config.js
 */
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import del from 'rollup-plugin-delete'
import { terser } from 'rollup-plugin-terser'
import { defineConfig } from 'rollup'
import pkg from '../package.json' assert {
  type: 'json',
}

const banner = `/*
 * ${pkg.name} ${pkg.version}
 * Licensed under MIT
*/
`


const publicConfig = {
  format: 'umd',
  name: 'tool-kits',
}

const config = defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        ...publicConfig,
        banner
      },
      {
        file: 'dist/index.min.js',
        ...publicConfig,
        plugins: [
          terser()
        ]
      }
    ],
    plugins: [
      typescript({
        declaration: false,
        target: "ES5"
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.mjs.js',
      format: 'esm',
      banner
    },
    plugins: [
      typescript({
        declaration: false
      })
    ]
  },
  // 归并 .d.ts 文件
  {
    input: 'types/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
      banner
    },
    plugins: [
      // 将类型文件全部集中到一个文件中
      dts(),
      // 在构建完成后，删除 types 文件夹
      del({
        targets: 'types',
        hook: 'buildEnd'
      })
    ]
  }
])

export default config