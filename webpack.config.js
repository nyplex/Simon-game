const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");



module.exports = {
    entry: "./src/assets/js/index.js",
    mode: "development",
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        clean: {
            keep: /images\//, // Keep these assets under 'ignored/dir'.
        },
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: path.resolve(__dirname, '../dist/css/')
                        }
                    },
                      {
                        loader: 'css-loader',
                        options: {importLoaders: 1},
                    },
                      {
                        loader: 'postcss-loader',
                        options: {
                          postcssOptions: {
                            config: path.resolve(__dirname, 'postcss.config.js'),
                          },
                        },
                    },
                ],
            }, 

            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            filename: "[name].[hash:6].[ext]",
                            outputPath: 'images/',
                            emitFile: true,
                            esModule: false
                        },
                    },
                ], 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Caching',
          template: "./src/template.html"

        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
              },
            },
        },
    },
}