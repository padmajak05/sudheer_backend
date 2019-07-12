'use strict';

const EVTC = 'userModel';
/* eslint-disable prefer-const */
let userService = require('../services/userService');
const dataService = require('../common/service');
/* eslint-enable prefer-const */
const logger = require("../utils/logger");
import errorMessages from '../../config/error.messages';

export function getUsers(req) {
    const userService1 = userService();
    let data;
    data = userService1.getUsers();
    data.then((users) => {
        logger.info(EVTC, 'User DATA : %s', JSON.stringify(users));
        return users;
    }).catch((error) => {
        logger.info(EVTC, 'error >> %s', JSON.stringify(error));
    });
    return data;
}
export function getUser(id) {
    const userService1 = userService();
    let data;
    return userService1.getUser(id)
    .then((user) => {
        logger.info(EVTC, 'User DATA : %s', JSON.stringify(user));
        if(user.length > 0) {
            return user;
        } else {
            return null;
        }
        
    }).catch((error) => {
        logger.info(EVTC, 'error >> %s', JSON.stringify(error));
    });
}
export function createUser(req) {
    const userService1 = userService();
    const promise = new Promise((resolve,reject)=> {
        const doesUserExist = userService1.getUser(req.body.username);
        doesUserExist.then((userExists) => {
            if(userExists.length>0){
                const error = {message: errorMessages.USER_ID_EXISTS };
                reject(error.message);
            }
            else {
                const data = userService1.createUser(req);
                data.then((user) => {
                    resolve(user);
                }).catch((error) => {
                    reject(error);
                });
            }
        });
     });
    return promise;
}

export function updateUser(req) {
    const userService1 = userService();
    const data = userService1.updateUser(req);
    data.then((user) => {
        logger.info(EVTC, 'User updated %s', req.body.id);
        return user;
    }).catch((error) => {
        logger.info(EVTC, 'error while updating user>> %s', JSON.stringify(error));
    });
    return data;
}

export function deleteUser(req) {
    const userService1 = userService();
    const data = userService1.deleteUser(req);
    data.then((user) => {
    logger.info(EVTC, 'User updated %s', req.body.id);
        return user;
    }).catch((error) => {
        logger.info(EVTC, 'error while updating user>> %s', JSON.stringify(error));
    });
    return data;
}

export function getData(req) {
    const data = dataService(req);
    logger.info("----------------------",data);
    return data.then((data1) => {
        logger.info("Data...........................",data1);
        return data1;
    }).catch((error) => {
        logger.info(EVTC, 'error while fetching data>> %s', JSON.stringify(error));
    });
}