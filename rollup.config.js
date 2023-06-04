// rollup.config.js
import { terser } from 'rollup-plugin-terser';
import css from "rollup-plugin-import-css";

export default {
	input: 'index.js',
	output: [
		{
			file: 'dist/gushiwen_delads.min.js',
			format: 'cjs',
      plugins: [terser({
        format: {
          comments: saveCommentsOfTampermonkeyPlugins
        }
      })]
		}
	],
  plugins: [css({
    minify: true
  })]
};

function saveCommentsOfTampermonkeyPlugins(node, comment) {
  const regexp = new RegExp([
    '==UserScript==',
    '@name',
    '@namespace',
    '@version',
    '@description',
    '@author',
    '@match',
    '@icon',
    '@grant',
    '@license',
    '==\/UserScript=='
  ].join('|'), 'i')
  return regexp.test(comment.value);
}
