// rollup.config.js
import { terser } from 'rollup-plugin-terser';
import styles from "rollup-plugin-styles";

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
  plugins: [styles()]
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
