import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist' },
      ]
    })
  ]
};
