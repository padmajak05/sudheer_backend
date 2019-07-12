'use strict';

var Sequelize = require('sequelize');
var logger = require("../utils/logger");
var config = require("../../config/config");

var EVTC = 'SequelizeUtil';
var sequelize = void 0;
var sequelizeUtil = function sequelizeUtil(config, logger) {
    // Entity based code
    function getConnection() {
        if (!sequelize) {
            sequelize = new Sequelize(config.databases.postgres.database, config.databases.postgres.username, config.databases.postgres.password, {
                dialect: config.databases.postgres.dialect,
                host: config.databases.postgres.host,
                port: config.databases.postgres.port,
                schema: config.databases.postgres.schema,
                logging: function logging(str) {
                    logger.info(EVTC, str);
                },
                define: { freezeTableName: true },
                pool: {
                    max: 25,
                    min: 5,
                    idle: 5000,
                    acquire: 60000
                }
            });
        }
        return sequelize;
    }

    return {
        getConnection: getConnection
    };
};
module.exports = sequelizeUtil;