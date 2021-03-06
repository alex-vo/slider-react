const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: ['babel-loader']
            },
            {
                test: /\.jpg$/,
                include: path.resolve(__dirname, 'img'),
                use: {
                    // loader: 'url-loader',
                    loader: 'file-loader'
                }
            },
            {
                test: /\.sass$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    process.env.PROD ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader'
                    },
                ],
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html" //source html
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
};