const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        open: true,
        historyApiFallback: true // Supports React Router Error "Cannot GET"
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