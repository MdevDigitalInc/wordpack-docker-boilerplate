// [ Moreira Development ] -----------
// Wordpack-Docker-Boilerplate - Webpack.config
//
// Includes full asset pipeline, Favicon generation,
// linting and autoprefixing.

'use strict';

// Webpack Tool Imports
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const AssetsPlugin = require('assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WriteFilePlugin   = require('write-file-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

// Project Paths
const paths = {
  source: resolveApp('src'),
  dist: resolveApp('theme/dist'),
  entry: resolveApp('src/index.js'),
  nodeModules: resolveApp('node_modules'),
};

const DEV = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: DEV ? 'cheap-eval-source-map' : 'source-map',
  stats: {
    colors: true,
    children: false,
    chunks: true,
    chunkModules: true,
    modules: false
  },
  entry: [paths.entry],
  output: {
    path: paths.dist,
    filename: DEV ? 'bundle.js' : 'bundle.[hash:8].js',
  },
  module: {
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      { parser: { requireEnsure: false } },
      // [ JS PROCESSING ] ---------------------/
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                url: false
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                plugins: () => [
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                  }),
                ],
              },
            },
            'sass-loader',
          ],
        }),
      },
      // [ IMAGE PROCESSING ] ---------------------/
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loaders: [ 'file-loader?context=./src/img&name=../img/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
              quality: DEV ?  95 : 5
            },
            gifsicle: {
              interlaced: false,
              optimizationLevel: 2
            },
            pngquant: {
              quality: DEV ? '50-80' : '5-10',
              speed: DEV ? 3 : 9
            },
            svgo: {
              plugins: [
                {
                  removeViewBox: false
                },
                {
                  removeEmptyAttrs: false
                }
              ]
            }
          }

        }]
      },
      // [ FONT PROCESSING ] --------------------/
      {
        test: /\.eot(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/vnd.ms-fontobject',
          name: 'fonts/[name].[ext]',
        }
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'font/opentype',
          name: 'fonts/[name].[ext]',
        }
      },
      {
        test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream',
          name: 'fonts/[name].[ext]',
        }
      },
      {
        test: /\.woff(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: 'fonts/[name].[ext]',
        }
      },
      {
        test: /\.woff2(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff2',
          name: 'fonts/[name].[ext]',
        }
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin(DEV ? 'bundle.css' : 'bundle.[hash:8].css'),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    new StyleLintPlugin({
      syntax: 'scss'
    }),
    new AssetsPlugin({
      path: paths.dist,
      filename: 'assets.json',
    }),
    new FaviconsWebpackPlugin({
      logo: './src/img/favicon.png',
      prefix: 'icons/',
      emitStats: false,
      persistentCache: true,
      inject: true,
      background: '#fff',
      title: 'HTML 5 Boilerplate',

      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    !DEV &&
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // React doesn't support IE8
          warnings: false,
        },
        mangle: {
          screw_ie8: true,
        },
        output: {
          comments: false,
          screw_ie8: true,
        },
        sourceMap: true,
      }),
    DEV &&
      new FriendlyErrorsPlugin({
        clearConsole: false,
      }),
    DEV &&
      new BrowserSyncPlugin({
        notify: false,
        host: 'localhost',
        port: 4000,
        logLevel: 'silent',
        files: ['./*.php'],
        proxy: 'http://localhost:9009/',
      }),
  ].filter(Boolean),
};
