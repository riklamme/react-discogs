const webpack = require('webpack')
const path = require('path')

const config = {
  context: path.resolve(__dirname, 'sources/scripts'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build/resources/scripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'sources/scripts'),
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['es2015', { modules: false }],
            'react',
          ]
        }
      }]
    }]
  }
}

module.exports = config