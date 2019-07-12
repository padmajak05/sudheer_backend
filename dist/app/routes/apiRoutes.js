'use strict';

var userController = require('../controllers/userController');
var BASE_ROUTE = '/data';
var USERS_ROUTE = '/list';
var USER_ROUTE = '/list/:id';
var express = require('express');
var router = express.Router();

var apiRoutes = function apiRoutes(app, logger) {
    router.route(BASE_ROUTE).get([userController.getData]);
    router.route(USERS_ROUTE).get([userController.getUsers]);
    router.route(USER_ROUTE).get([userController.getUser]);
    router.route(USERS_ROUTE).post([userController.post]);
    router.route(USERS_ROUTE).put([userController.put]);
    router.route(USERS_ROUTE).delete([userController.delete]);
    app.use('/api/users', router);
};

module.exports = apiRoutes;