'use strict';

var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var path = require('path');

var app = express();
var router = express.Router();
var compiler = webpack(config);
var env = process.env.NODE_ENV || 'DEV';

app.use(webpackDevMiddleware(compiler, {
  stats: {color: true},
  publicPath: '/'
}));
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr'
}));

app.use('/', express.static('public'));
app.get('/hola', (req, res) => {
  res.send('express dice hola');
});

app.all('/*', (req, res) => {
  if (env === 'DEV') {
    let filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, function(err, result){
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  }
});

app.listen(process.env.PORT || 3000);
