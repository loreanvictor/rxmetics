export default {
  input: 'dist/es6/index.js',
  output: {
    name: 'rxmetics',
    format: 'iife',
    globals: {
      'rxjs': 'rxjs',
      'rxjs/operators': 'rxjs.operators',
    }
  },
  external: ['rxjs', 'rxjs/operators'],
}
