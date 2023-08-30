const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist'),
        publicPath: '/',
        clean: true,
        assetModuleFilename: path.join('images', '[name][ext]'),
    },
    module: {
        rules: [
            {
                test: /\.(js|tsx|ts)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false } },
                    'postcss-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false } },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|webp|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        minimizer: [
            '...',
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            ['mozjpeg', { quality: 85 }],
                            ['svgo', { name: 'preset-default' }],
                        ],
                    },
                },
            }),
            // new ImageminWebpWebpackPlugin(),
        ],
    },
    plugins: [
        new Dotenv({
            path: `./.env.${argv.mode}`,
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    devServer: {
        host: '0.0.0.0',
        port: 3001,
        historyApiFallback: true,
        hot: true,
        // watchOptions: {
        //     aggregateTimeout: 0,
        //     poll: 1000
        // },
        compress: true,
        allowedHosts: 'all',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json', '.css', '.html'],
    },
});
