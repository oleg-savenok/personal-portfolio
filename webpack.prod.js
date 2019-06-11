const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const Compression = require('compression-webpack-plugin');
const UglifyJS = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJS({
            uglifyOptions: {
                output: {
                    comments: false, // remove comments
                },
            },
        }),
        new Compression({
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
    ],
});
