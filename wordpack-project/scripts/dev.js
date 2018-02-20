// [ Moreira Development ] -----------
// Wordpack-Docker-Boilerplate - Webpack.config
//
// Simple configurations for dev environment with webpack
//
'use strict';

const webpack = require('webpack');
// Output Configuration
const config = require('./webpack.config');

const clientCompiler = webpack(config);

clientCompiler.watch(
  {
    noInfo: false,
    quiet: false,
  },
  (err, stats) => {
    if (err) return;
  }
);
