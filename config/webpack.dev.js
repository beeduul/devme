
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const path = require('path');
const rootDir = path.resolve(__dirname, '../');

module.exports = {
  context: __dirname,
  
  devtool: debug ? "inline-sourcemap" : null, // alt: 'cheap-module-eval-source-map'
  
  devServer: {
      contentBase: path.resolve(rootDir, "dist"),  
      https: true,      
  },

  entry: path.resolve(rootDir, "src/js/app.js"),
  
  output: {
    path: __dirname + "/js",
    filename: "app.min.js",
    libraryTarget: 'var',
    library: "App",
  },
  
  module: {
    rules: [
      // babel-loader for transpling ES6 to es2015
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },

  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
