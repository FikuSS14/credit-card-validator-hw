const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.config.js');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  static: './dist',
  port: 9000,
});

server.listen(9000, 'localhost', (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send('ok');
  }
});