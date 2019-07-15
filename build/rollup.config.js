import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript'

//  system, amd, cjs, es, iife, umd

const tps = ['system', 'amd', 'cjs', 'es', 'iife', 'umd']
const extensions = ['.js', '.ts']
let cfgs = []

tps.map(item => {
	cfgs.push({
		input: 'src/index.js',
		external: ['jquery', 'moment', 'lodash'],
		output: {
			format: item,
			file: `libs/${item}.js`,
			name: 'accurate',
			globals: {
				jquery: '$',
				lodash: '_',
				getCurrentPages: 'getCurrentPages'
			}
		},
		plugins: [
			typescript(),
			nodeResolve({
				brower: true,
				module: true,
				jsnext: true,
				main: true,
				extensions,
				customResolveOptions: {
					moduleDirectory: 'node_modules'
				}
			}),
			commonjs({
				extensions,
				include: 'node_modules/**',
				exclude: []
			}),
			babel({
				exclude: 'node_modules/**',
				runtimeHelpers: true
			}),
			terser({
				sourcemap: false,
				output: {
					comments: false
				}
				//  numWorkers: os.cpus().length - 1
			})
		]
	})
})

export default cfgs
