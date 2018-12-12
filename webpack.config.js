var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "./build");

const config = {
  entry: ["@babel/polyfill", "./src/client/index.js"],
  output: {
    filename: "bundle.js",
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /(\.css|.scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

module.exports = config;
// test: /\.(jsx|js)?$/,
// use: [
//   {
//     loader: "babel-loader",
//     options: {
//       cacheDirectory: true,
//       presets: ["react", "es2015"]
//     }
//   }
// ]
