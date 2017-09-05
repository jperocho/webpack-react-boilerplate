const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const desc = require('./package').description;

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
            test: /\.s?css$/,
            use: ["style-loader","css-loader","sass-loader"]
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin({
      title: desc,
      template: './src/index.html'
    })]
};