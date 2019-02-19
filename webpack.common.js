const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

function setPugPage(pagename) {
    let minifyOptions = false;

    if (process.env.NODE_ENV === 'production') {
        minifyOptions = {
            removeComments: true,
        };
    }

    return new HtmlWebpackPlugin({
        filename: pagename + '.html',
        template: './src/pages/' + pagename + '.pug',
        minify: minifyOptions,
    });
}

module.exports = {
    entry: ['./src/scripts/index'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                exclude: /node_modules|packages/,
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                exclude: /node_modules|packages/,
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.pug$/,
                use: ['html-loader?attrs=false', 'pug-html-loader'],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        setPugPage('index'),
        setPugPage('about'),
        setPugPage('contact'),
    ],
};
