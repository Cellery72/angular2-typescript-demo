var webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  node_modules = path.resolve(__dirname, '../node_modules/');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
  debug: true,
  devtool: "cheap-module-source-map",
  entry: './app/boot.ts',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'awesome-typescript-loader',
      exclude: [/\.(spec|e2e)\.ts$/, node_modules]
    }, {
      test: /\.(html|css)$/,
      loader: 'raw-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};