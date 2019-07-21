'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var http = require('http');
var app = express();
var cors = require('cors');
var ApiRoutes = require('./routes/apiRoutes');
var logger = require('./utils/logger');
var httpServer = http.createServer(app);

app.use(_bodyParser2.default.json({ type: 'application/*', limit: '50mb' }));
app.use(_bodyParser2.default.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());

httpServer.listen(3000, function () {
  var host = httpServer.address().address;
  logger.info('Now listening at 3000');
});

ApiRoutes(app, logger);