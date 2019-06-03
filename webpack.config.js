const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const pkg = require('./package.json');
const path = require('path');
const libraryName= pkg.name;

module.exports = {
  entry: path.join(__dirname, "./components/index.js"),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'rivivo-srx.min.js',
    library: libraryName,
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true
  },
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      terserOptions: {
        output: {
          comments: false,
        },
      },
    })]
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|stories)/,
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.jsx','.js'],
    alias: {
      'react': path.resolve(__dirname, './node_modules/react') ,
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  plugins: [
    new UnminifiedWebpackPlugin()
  ]
};
