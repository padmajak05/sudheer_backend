import bodyParser from 'body-parser';
const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const ApiRoutes = require('./routes/apiRoutes');
const logger = require('./utils/logger');
const httpServer = http.createServer(app);

app.use(bodyParser.json({type: 'application/*', limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));
app.use(cors());

httpServer.listen(3000, () => {
  const host = httpServer.address().address;
  logger.info('Now listening at 3000');
});

ApiRoutes(app,logger);
