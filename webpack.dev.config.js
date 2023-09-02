const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = (env, argv) =>
    merge(common(env, argv), {
        mode: 'development',
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
    });
