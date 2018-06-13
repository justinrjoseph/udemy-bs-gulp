const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    vendor: './app/assets/scripts/vendor.js',
    app: './app/assets/scripts/app.js'
  },
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['env']
        },
        test: /\.js$/,
        exclude: '/[node_modules]/'
      }
    ]
  }
}