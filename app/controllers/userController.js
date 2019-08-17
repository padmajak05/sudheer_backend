'use strict';

import * as userModel from "../models/userModel";
const logger = require("../utils/logger");
import errorMessages from '../../config/error.messages';
import { resolve } from "dns";

const operations = {

  getUsers: (req, resp) => {
    const id = req.params.id;
    let record = null;
    return userModel.getUsers(id)
      .then((data) => {
        if (data) {
          record = data;
          resp.status(200).json(record);
        } else {
          throw new Error('INVALID_USER_ID');
        }
      }).catch((err) => {
        let message, status;
        if (err && errorMessages[err.message]) {
          status = 403;
          message = errorMessages[err.message];
        } else {
          logger.error(err);
          status = 500;
          message = errorMessages.SERVER_ERROR;
        }
        resp.status(status).send({
          success: false,
          message
        });
      });
    },

  getUser: (req, resp) => {
    const id = req.params.id;
    let record = null;
    return userModel.getUser(id)
    .then((data) => {
      if (data) {
        record = data;
        resp.status(200).json(record);
      } else {
        resp.status(200).json('INVALID_USER_ID');
      }
    }).catch((err) => {
      let message, status;
      if (err && errorMessages[err.message]) {
        status = 403;
        message = errorMessages[err.message];
      } else {
        logger.error(err);
        status = 500;
        message = errorMessages.SERVER_ERROR;
      }
      resp.status(status).send({
        success: false,
        message
      });
    });
  },

  post: (req, resp) => {
    const id = req.params.id;
    let record = null;
    return userModel.createUser(req)
      .then((data) => {
        if (data) {
          record = data;
          resp.status(200).json(record);
        } else {
          throw new Error('INVALID_USER_ID');
        }
      }).catch((err) => {
        let message, status;
        if (err === errorMessages.USER_ID_EXISTS) {
          status = 403;
          message = errorMessages[err.message];
        } else {
          logger.error(err);
          status = 500;
          message = errorMessages.SERVER_ERROR;
        }
        resp.status(status).send({
          success: false,
          message
        });
      });
  },
  put: (req, resp) => {
    const id = req.params.id;
    let record = null;
    return userModel.updateUser(req)
      .then((data) => {
        if (data) {
          record = data;
          resp.status(200).json(record);
        } else {
          throw new Error('INVALID_USER_ID');
        }
      }).catch((err) => {
        let message, status;
        if (err && errorMessages[err.message]) {
          status = 403;
          message = errorMessages[err.message];
        } else {
          logger.error(err);
          status = 500;
          message = errorMessages.SERVER_ERROR;
        }
        resp.status(status).send({
          success: false,
          message
        });
      });
  },
  delete: (req, resp) => {
    const id = req.params.userid;
    let record = null;
    return userModel.deleteUser(id)
      .then((data) => {
        if (data) {
          record = data;
          resp.status(200).json(record);
        } else {
          throw new Error('INVALID_USER_ID');
        }
      }).catch((err) => {
        let message, status;
        if (err && errorMessages[err.message]) {
          status = 403;
          message = errorMessages[err.message];
        } else {
          logger.error(err);
          status = 500;
          message = errorMessages.SERVER_ERROR;
        }
        resp.status(status).send({
          success: false,
          message
        });
      });
  },
  getData: (req, resp) => {
    return userModel.getData(req)
    .then((data) => {
      resp.status(200).json(data);
    }).catch((err) => {
      resp.status(500);
    }
    );
  }
};
module.exports = operations;
