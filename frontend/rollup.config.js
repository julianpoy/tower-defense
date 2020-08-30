import rollup from 'rollup';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import alias from '@rollup/plugin-alias';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';

const path = require('path');
const projectRootDir = path.resolve(__dirname);

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    alias({
      entries: [
        {
          find: 'src',
          replacement: path.resolve(projectRootDir, 'src')
        }
      ],
    }),
    replace({
      "process.env.NODE_ENV": process.env.NODE_ENV,
    }),
    resolve(),
    typescript(),
    babel( {extensions: ["js", "tsx"]}),
    commonjs(),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist' },
      ]
    }),
    serve('dist'),
    livereload('dist')
  ]
};
