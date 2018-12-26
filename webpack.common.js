const path = require('path');
const webpack = require('webpack');

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
        ],
    },
};
