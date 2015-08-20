module.exports = {
  entry: './index.js',
  output: {
    path: 'public',
    publicPath: '/public',
    filename: 'bundle.js'
  },
  postcss: [
    require('cssnext')({
      url: false
    }),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('postcss-nested')
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'css?sourceMap&modules&localIdentName=[path][name]-[local]-[hash:base64:5]!postcss'
      },
      {
        test: /\.jpg$/,
        loader: 'file'
      }
    ]
  }
};
