import { terser } from "rollup-plugin-terser";
import base from './base';


export default Object.assign(base, {
  plugins: [
    terser(),
  ],
  output: Object.assign(base.output, {
    file: 'dist/bundles/rxmetics.es6.min.js',
  }),
});
