import { terser } from 'rollup-plugin-terser';
const version = require('./package.json').version

export default {
	input: 'closable.js',
	output: {
		format: 'umd',
		name: 'SvelteClosable',
		file: 'dist/closable.js',
		banner:
`/**
 * svelte-closable v${version}
 * (c) ${new Date().getFullYear()} Taha Shashtari
 * @license MIT
 */`
	},
	plugins: [
		terser()
	]
}
