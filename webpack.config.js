var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: './web/src/index.js',

    output: {
        filename: 'bundle.js',
        publicPath: ''
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, './web/index.html'), inject: true})
    ],
    devServer: {
        port: 3000,
        inline: true,
        colors: true,
        progress: true
    }
};