const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) =>
    merge(common(env, argv), {
        target: ['web', 'es2022'],
        mode: 'production',
        output: {
            filename: 'bundle.[contenthash].js',
            path: path.resolve('dist'),
            publicPath: '/',
            clean: true,
            assetModuleFilename: path.join('images', '[name][ext]'),
        },
        // devtool: 'source-map',
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin(),
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
            ],
        },
    });
