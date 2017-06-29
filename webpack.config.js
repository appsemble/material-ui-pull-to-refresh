const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: path.join(__dirname, 'example', 'main.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'example'),
          path.join(__dirname, 'src'),
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        loader: 'file-loader',
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({ template: 'example/index.html' }),
  ],
  devServer: {
    host: '0.0.0.0',
    noInfo: true,
    disableHostCheck: true,
  },
};
