import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import del from 'rollup-plugin-delete'

export default {
  input: './src/index.js',
  output: [
    {
      dir: 'dist',
      entryFileNames: 'index.cjs',
      format: 'cjs',
    },
    {
      dir: 'dist',
      entryFileNames: 'index.js',
      format: 'esm',
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    commonjs(),
    nodeResolve(),
    json(),
    terser(),
  ],
  external: [
    'commitizen',
  ],
}
