const userController = require('../controllers/userController');
const BASE_ROUTE = '/data';
const USERS_ROUTE = '/list';
const USER_ROUTE = '/list/:id';
const express = require('express');
const router = express.Router();

const apiRoutes = (app, logger) => {
    router.route(BASE_ROUTE).get([
        userController.getData
    ])
    router.route(USERS_ROUTE).get([
        userController.getUsers
    ]);
    router.route(USER_ROUTE).get([
        userController.getUser
    ]);
    router.route(USERS_ROUTE).post([
        userController.post
    ]);
    router.route(USERS_ROUTE).put([
        userController.put
    ]);
    router.route(USERS_ROUTE).delete([
        userController.delete
    ]);
    app.use('/api/users', router);
};

module.exports = apiRoutes;