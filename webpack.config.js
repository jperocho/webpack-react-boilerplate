const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const desc = require('./package').description;


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        publicPath: '/', // Fixed the missing bundle.js on React Router
        filename: 'bundle.js'
    },
    devServer: {
        stats: 'errors-only',
        open: true,
        historyApiFallback: true // Fixed Error "Cannot GET" on React Router
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
        hash: true,
        template: './src/index.html'
    })]
}