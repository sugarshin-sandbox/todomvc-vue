import * as Dotenv from 'dotenv-webpack';
import * as webpack from 'webpack';
import { smart } from 'webpack-merge';
import baseConfig from './webpack.config.base';

export default async (): Promise<webpack.Configuration> => {
  return smart(baseConfig, {
    mode: 'development',
    cache: true,
    plugins: [
      new Dotenv({ path: 'config/environments/development', systemvars: true }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: JSON.stringify('development'),
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'source-map-loader',
        },
      ],
    },
    devServer: {
      before: app => app.get('/favicon.ico', (_, res) => res.status(200).send()),
      historyApiFallback: true,
      contentBase: './dist',
      hot: true,
      publicPath: '/',
      host: '0.0.0.0',
      port: 8008,
    },
  });
};
