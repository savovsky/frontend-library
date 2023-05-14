import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default {
    input: './src/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            exports: 'auto',
            globals: {
                react: 'React',
            }
        },
        {
            file: packageJson.main,
            format: 'esm',
            sourcemap: true,
            exports: 'auto',
            globals: {
                react: 'React',
            }
        },
    ],
    plugins: [
        resolve({ preferBuiltins: true, browser: true}),
        peerDepsExternal(),
        babel({
            exclude: ['**/node_modules/**', 'build/**'],
            presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react'],
        }),
        postcss({
            extract: 'styles.css',
            sourceMap: true,
            plugins: [],
            minimize: true,
        }),
    ],
}
