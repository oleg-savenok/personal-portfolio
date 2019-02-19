const HtmlWebpackPlugin = require('html-webpack-plugin');

function setPugPage(path, env) {
    let minifyOptions = false;

    if (env === 'production') {
        minifyOptions = {
            removeComments: true,
        };
    }

    return new HtmlWebpackPlugin({
        template: path,
        minify: minifyOptions,
    });
}
