const path = require("path")
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const files = {
    setup: fs.readFileSync('./src/comp/setup.html', { encoding: 'utf-8' }),
    rules: fs.readFileSync('./src/comp/rules.html', { encoding: 'utf-8' }),
    header: fs.readFileSync('./src/comp/header.html', { encoding: 'utf-8'})
  };



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
                          publicPath: "./"
                        }
                    },
                      {
                        loader: 'css-loader',
                        options: {importLoaders: 2, url: false},
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
          template: "./src/template.html",
          templateParameters: {
            files
          }
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