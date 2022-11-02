import { resolve } from 'path'
import type { UserConfigExport } from 'vite'
import dts from 'vite-plugin-dts' // https://github.com/qmhc/vite-plugin-dts

export default (): UserConfigExport => {
  return {
    build: {
      outDir: resolve(__dirname, '../../dist/resolver'),
      lib: {
        entry: resolve(__dirname, 'index.ts'), // 打包入口
        formats: ['es', 'cjs'],
        fileName: 'index'
      }
    },
    plugins: [dts()]
  } as UserConfigExport
}
