import rollup from 'rollup';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';

const watcher = rollup.watch({
  watch: true
});

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": process.env.NODE_ENV,
    }),
    babel(),
    resolve(),
    commonjs(),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist' },
      ]
    }),
    serve('dist'),
  ]
};
