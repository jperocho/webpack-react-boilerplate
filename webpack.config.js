const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const desc = require('./package').description;

module.exports = {
    entry: './src/index.js',
    output: {
        path: '/Users/Bhong/Sandbox/webpack-practice/dist',
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: desc,
        hash: true,
        template: './src/index.html'
    })]
}