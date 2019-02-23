const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Components: path.resolve( __dirname, './src/Components' )
    },
    extensions: ['*', '.js', '.jsx'],
  },
}
