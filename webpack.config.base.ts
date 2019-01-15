import * as CleanPlugin from 'clean-webpack-plugin';
import * as HtmlPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import * as path from 'path';
import * as webpack from 'webpack';

export default {
  mode: 'none',
  entry: {
    app: './src/index.ts',
  },
  plugins: [
    new CleanPlugin(['dist'], { verbose: true }),
    new HtmlPlugin({
      template: './template/index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new VueLoaderPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].[id].js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.mjs'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      vue: 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      { test: /\.mjs$/, include: /node_modules/, type: 'javascript/auto' },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'awesome-typescript-loader', options: { appendTsSuffixTo: [/\.vue$/] } },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, 'src', 'images')],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
} as webpack.Configuration;
