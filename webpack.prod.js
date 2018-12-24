const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const DedupePlugin = require('dedupe-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            //new DedupePlugin(),
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        inline: false
                    }
                }
            }),
            new CompressionPlugin()
        ],
    }
});
