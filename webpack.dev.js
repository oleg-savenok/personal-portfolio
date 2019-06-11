const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const minifyOptions = false;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        disableHostCheck: true,
        contentBase: './public/',
        port: 8000,
    },
});
