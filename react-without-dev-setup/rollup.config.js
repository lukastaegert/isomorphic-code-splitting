import fs from 'fs';
import path from 'path';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'index.js',
    output: {
        dir: 'dist',
        format: 'esm'
    },
    plugins: [
        {
            resolveId(id, importer) {
                if (id.endsWith('es-react/index.js')) {
                    return path.resolve(
                        path.dirname(importer),
                        id.replace('es-react', 'es-react-production')
                    );
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
            }
        },
        terser()
    ]
};
