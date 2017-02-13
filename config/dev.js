// Rollup plugins.
import babel from 'rollup-plugin-babel'
import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'sources/scripts/index.js',
  dest: 'build/resources/scripts/app.js',
  format: 'iife',
  useStrict: false,
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**',
        'node_modules/re-base/**',
        'node_modules/firebase/**'
      ],
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'node_modules/re-base/index.js': [ 'Rebase' ],
        'node_modules/firebase/firebase.js': ['auth', 'database'],

      }
    }),
    resolve({
      module: true,
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.js']
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    removeUseStrict()
  ],
  sourceMap: true
}

function removeUseStrict () {
  return {
    transformBundle: code => {
      return {
        code: code.replace( `'use strict';`, '' ),
        map: { mappings: '' }
      }
    }
  };
}