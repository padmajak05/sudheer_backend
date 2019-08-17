'use strict';

const Sequelize = require('sequelize');
const logger = require("../utils/logger");
const config = require("../../config/config");

const EVTC = 'SequelizeUtil';
let sequelize;
const sequelizeUtil = () => {
    // Entity based code
    function getConnection() {
        if (!sequelize) {
            sequelize = new Sequelize(config.databases.postgres.database,
            config.databases.postgres.username,
            config.databases.postgres.password,
                {
                    dialect: config.databases.postgres.dialect,
                    host: config.databases.postgres.host,
                    port: config.databases.postgres.port,
                    schema: config.databases.postgres.schema,
                    logging: (str) => {
                        logger.info('Sequelize query'+ str);
                    },
                    define: { freezeTableName: true },
                    pool: {
                        max: 25,
                        min: 5,
                        idle: 5000,
                        acquire: 60000,
                    },
                });
        }
        return sequelize;
    }

    return {
        getConnection,
    };
};
module.exports = sequelizeUtil;
