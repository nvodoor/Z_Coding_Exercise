const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/client/app.jsx',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Photo Gallery'
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].[hash].css',
      chunkFileName: '[id].[hash].css'
    })
  ],
  output: {
    filename: '[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss?/,
        use: [
          'style-loader',
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}