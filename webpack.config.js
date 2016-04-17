var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://127.0.0.1:8080/',
            './web/src/index.js'
        ]
    },

    output: {
        path: __dirname,
        filename: '[name].js',
        publicPath: ''
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015' }
        ]
    }
};