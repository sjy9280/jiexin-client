const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, 'public', 'index.html'),
    favicon: path.join(__dirname, 'public', 'favicon.ico'),
    manifest: path.join(__dirname, 'public', 'manifest.json')
});


module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: 'eval',
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /node_modules/
            },
            {
                test: /.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [htmlPlugin, new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: process.env.NODE_ENV
        }
    }), new webpack.ProvidePlugin({
        "React": "react",
    })],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx', '.css', '.less']
    }
}