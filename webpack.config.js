const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            actions: path.resolve(__dirname, 'src/actions')
        }
    },
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        './src/main.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        extends: path.join(__dirname, '.babelrc')
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }]
                }))
            },
            {
                test: /\.sass$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }]
                }))
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src/assets/'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'src/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
        port: 5000
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            path: path.resolve(__dirname, 'public')
        }),
        new ExtractTextPlugin({filename: 'style.css', allChunks: true})
    ]
};