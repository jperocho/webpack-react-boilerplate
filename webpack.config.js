const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const desc = require('./package').description;

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        stats: 'errors-only',
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader' 
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: desc,
        hash: true,
        template: './src/index.html'
    })]
}