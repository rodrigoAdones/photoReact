var path = require('path')

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  }
}
