import fs from 'fs';
import path from 'path';
import {terser} from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import rimraf from 'rimraf';

export default {
  input: 'index.js',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [
    {
      resolveId(id) {
        if (id.endsWith('es-react/index.js')) {
          return id.replace('es-react', 'es-react-production');
        }
      },
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'index.html',
          source: fs.readFileSync('index.html')
        });
        this.emitFile({
          type: 'asset',
          fileName: 'index.css',
          source: fs.readFileSync('index.css')
        });
        rimraf.sync(path.resolve(__dirname, 'dist'));
      }
    },
    babel({
      plugins: [['htm', {pragma: 'React.createElement'}], '@babel/syntax-dynamic-import']
    }),
    terser()
  ]
};
