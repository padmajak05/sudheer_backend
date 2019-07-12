const express = require('express');
const http = require('http');
import bodyParser from 'body-parser';
const app = express();
const ApiRoutes = require('./routes/apiRoutes');
const logger = require('./utils/logger');

const httpServer = http.createServer(app);
app.use(bodyParser.json({type: 'application/*', limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));

httpServer.listen(3000, () => {
  const host = httpServer.address().address;
  logger.info('Now listening at 3000');
});

ApiRoutes(app,logger);
