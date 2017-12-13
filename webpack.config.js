const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// test comment
module.exports = {
  entry: './client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development
      host: 'localhost',
      port: 4001,
      // proxy the Webpack Dev Server endpoint
      // (which should be serving on http://localhost:3000/)
      // through BrowserSync
      proxy: 'http://localhost:4000'
    },
    {
      // prevent BrowserSync from reloading the page
      // and let Webpack Dev Server take care of this
      reload: false
    }
    )
  ]
};
