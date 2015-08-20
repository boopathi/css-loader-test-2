module.exports = {
    entry: './index.js',
    output: {
        path: 'public',
        publicPath: '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'css?sourceMap&modules&localIdentName=[path][name]-[local]-[hash:base64:5]'
            },
            {
                test: /\.jpg$/,
                loader: 'file'
            }
        ]
    }
};
