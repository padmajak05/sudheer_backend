'use strict';

var SequelizeUtil = require('../common/sequelizeUtil');
var Sequelize = require('sequelize');
/* eslint-disable */
var EVTC = 'userService';
var logger = require("../utils/logger");
var config = require("../../config/config");

var userSequelizervice = function userSequelizervice() {
    logger.info(EVTC, 'Initialized User Service');
    var sequelize = SequelizeUtil(config, logger).getConnection();

    var User = sequelize.define('users', {
        // Sequelize.STRING,  Sequelize.DATE, Sequelize.BIGINT , Sequelize.JSON
        id: {
            type: Sequelize.BIGINT,
            field: 'id',
            autoIncrement: true,
            primaryKey: true
        },
        firstname: {
            type: Sequelize.STRING,
            field: 'firstName'
        },
        lastname: {
            type: Sequelize.STRING,
            field: 'lastName'
        },
        username: {
            type: Sequelize.STRING,
            field: 'username'
        },
        password: {
            type: Sequelize.STRING,
            field: 'password'
        },
        phone: {
            type: Sequelize.STRING,
            field: 'phone'
        },
        aadhar: {
            type: Sequelize.STRING,
            field: 'aadhar'
        },
        createdAt: {
            type: Sequelize.DATE,
            field: 'creat_ts',
            defaultValue: sequelize.literal('NOW()'),
            timestamps: true
        },
        updatedAt: {
            type: Sequelize.DATE,
            field: 'lst_updt_ts',
            defaultValue: sequelize.literal('NOW()'),
            timestamps: true }
    });
    User.schema(config.databases.postgres.schema);
    // Entity based code
    function getUsers() {
        return User.findAll();
    }

    function getUser(id) {
        logger.info(EVTC + ('Searching for a user based on id:' + id));
        return User.findAll({
            where: {
                username: id
            }
        });
    }

    function createUser(req) {
        logger.info(EVTC, 'req.body.market_id  %s', req.body.marketId);
        return User.create({
            id: req.body.id,
            username: req.body.username,
            password: req.body.password,
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            phone: req.body.phone,
            aadhar: req.body.aadhar,
            createdAt: sequelize.literal('NOW()'),
            modifiedAt: sequelize.literal('NOW()')
        });
    }

    function updateUser(req) {
        return User.update({
            id: req.body.id,
            username: req.body.username,
            password: req.body.password,
            modifiedAt: sequelize.literal('NOW()')
        }, { where: {
                id: req.body.id
            }
        });
    }

    function deleteUser(id) {
        return User.destroy({
            where: {
                id: id
            }
        });
    }
    return {
        getUsers: getUsers,
        getUser: getUser,
        createUser: createUser,
        updateUser: updateUser,
        deleteUser: deleteUser
    };
};
module.exports = userSequelizervice;
/* eslint-enable */