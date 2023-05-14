import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from 'rollup-plugin-babel';

const packageJson = require('./package.json');

export default {
    input: './src/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            exports: 'auto',
        },
        {
            file: packageJson.main,
            format: 'esm',
            sourcemap: true,
            exports: 'auto',
        },
    ],
    plugins: [
        resolve({ preferBuiltins: true, browser: true}),
        peerDepsExternal(),
        babel({
            exclude: ['**/node_modules/**', 'build/**'],
            presets: ['@babel/preset-env', '@babel/preset-flow'],
        }),
    ],
}
