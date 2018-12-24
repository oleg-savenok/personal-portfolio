module.exports = {
    plugins: {
        autoprefixer: { browsers: ['cover 99.5%'] },
        cssnano: {
            options: {
                map: true,
            },
            preset: ['default', { discardComments: { removeAll: true } }],
        },
    },
};
