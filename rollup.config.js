// rollup.config.js
import {terser} from 'rollup-plugin-terser';

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
	]
};

function saveCommentsOfTampermonkeyPlugins(node, comment) {
  const text = comment.value;
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
