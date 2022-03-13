const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
            // css using sass
            {test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader',]},
            // images
            {test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/i, type:'asset/resource'},
      ],
  },
};