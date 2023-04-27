// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const loader = require('sass-loader');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, './'),
      watch: true,
    },
    compress: false,
    port: 3000,
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Virtual Keyboard',
  })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        include: [
          path.resolve(__dirname, './src'),
        ],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/index.scss',
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false },
          },
        ],
      },
    ],
  },
};
