'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getData = getData;

var _error = require('../../config/error.messages');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EVTC = 'userModel';
/* eslint-disable prefer-const */
var userService = require('../services/userService');
var dataService = require('../common/service');
/* eslint-enable prefer-const */
var logger = require("../utils/logger");
function getUsers(req) {
    var userService1 = userService();
    var data = void 0;
    data = userService1.getUsers();
    data.then(function (users) {
        logger.info(EVTC, 'User DATA : %s', JSON.stringify(users));
        return users;
    }).catch(function (error) {
        logger.info(EVTC, 'error >> %s', JSON.stringify(error));
    });
    return data;
}
function getUser(id) {
    var userService1 = userService();
    var data = void 0;
    return userService1.getUser(id).then(function (user) {
        logger.info(EVTC, 'User DATA : %s', JSON.stringify(user));
        if (user.length > 0) {
            return user;
        } else {
            return null;
        }
    }).catch(function (error) {
        logger.info(EVTC, 'error >> %s', JSON.stringify(error));
    });
}
function createUser(req) {
    var userService1 = userService();
    var promise = new Promise(function (resolve, reject) {
        var doesUserExist = userService1.getUser(req.body.username);
        doesUserExist.then(function (userExists) {
            if (userExists.length > 0) {
                var error = { message: _error2.default.USER_ID_EXISTS };
                reject(error.message);
            } else {
                var data = userService1.createUser(req);
                data.then(function (user) {
                    resolve(user);
                }).catch(function (error) {
                    reject(error);
                });
            }
        });
    });
    return promise;
}

function updateUser(req) {
    var userService1 = userService();
    var data = userService1.updateUser(req);
    data.then(function (user) {
        logger.info(EVTC, 'User updated %s', req.body.id);
        return user;
    }).catch(function (error) {
        logger.info(EVTC, 'error while updating user>> %s', JSON.stringify(error));
    });
    return data;
}

function deleteUser(req) {
    var userService1 = userService();
    var data = userService1.deleteUser(req);
    data.then(function (user) {
        logger.info(EVTC, 'User updated %s', req.body.id);
        return user;
    }).catch(function (error) {
        logger.info(EVTC, 'error while updating user>> %s', JSON.stringify(error));
    });
    return data;
}

function getData(req) {
    var data = dataService(req);
    logger.info("----------------------", data);
    return data.then(function (data1) {
        logger.info("Data...........................", data1);
        return data1;
    }).catch(function (error) {
        logger.info(EVTC, 'error while fetching data>> %s', JSON.stringify(error));
    });
}