'use strict';

var _userModel = require("../models/userModel");

var userModel = _interopRequireWildcard(_userModel);

var _error = require("../../config/error.messages");

var _error2 = _interopRequireDefault(_error);

var _dns = require("dns");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var logger = require("../utils/logger");


var operations = {

  getUsers: function getUsers(req, resp) {
    var id = req.params.id;
    var record = null;
    return userModel.getUsers(id).then(function (data) {
      if (data) {
        record = data;
        resp.status(200).json(record);
      } else {
        throw new Error('INVALID_USER_ID');
      }
    }).catch(function (err) {
      var message = void 0,
          status = void 0;
      if (err && _error2.default[err.message]) {
        status = 403;
        message = _error2.default[err.message];
      } else {
        logger.error(err);
        status = 500;
        message = _error2.default.SERVER_ERROR;
      }
      resp.status(status).send({
        success: false,
        message: message
      });
    });
  },

  getUser: function getUser(req, resp) {
    var id = req.params.id;
    var record = null;
    return userModel.getUser(id).then(function (data) {
      if (data) {
        record = data;
        resp.status(200).json(record);
      } else {
        throw new Error('INVALID_USER_ID');
      }
    }).catch(function (err) {
      var message = void 0,
          status = void 0;
      if (err && _error2.default[err.message]) {
        status = 403;
        message = _error2.default[err.message];
      } else {
        logger.error(err);
        status = 500;
        message = _error2.default.SERVER_ERROR;
      }
      resp.status(status).send({
        success: false,
        message: message
      });
    });
  },

  post: function post(req, resp) {
    var id = req.params.id;
    var record = null;
    return userModel.createUser(req).then(function (data) {
      if (data) {
        record = data;
        resp.status(200).json(record);
      } else {
        throw new Error('INVALID_USER_ID');
      }
    }).catch(function (err) {
      var message = void 0,
          status = void 0;
      if (err === _error2.default.USER_ID_EXISTS) {
        status = 403;
        message = _error2.default[err.message];
      } else {
        logger.error(err);
        status = 500;
        message = _error2.default.SERVER_ERROR;
      }
      resp.status(status).send({
        success: false,
        message: message
      });
    });
  },
  put: function put(req, resp) {
    var id = req.params.id;
    var record = null;
    return userModel.updateUser(req).then(function (data) {
      if (data) {
        record = data;
        resp.status(200).json(record);
      } else {
        throw new Error('INVALID_USER_ID');
      }
    }).catch(function (err) {
      var message = void 0,
          status = void 0;
      if (err && _error2.default[err.message]) {
        status = 403;
        message = _error2.default[err.message];
      } else {
        logger.error(err);
        status = 500;
        message = _error2.default.SERVER_ERROR;
      }
      resp.status(status).send({
        success: false,
        message: message
      });
    });
  },
  delete: function _delete(req, resp) {
    var id = req.params.userid;
    var record = null;
    return userModel.deleteUser(id).then(function (data) {
      if (data) {
        record = data;
        resp.status(200).json(record);
      } else {
        throw new Error('INVALID_USER_ID');
      }
    }).catch(function (err) {
      var message = void 0,
          status = void 0;
      if (err && _error2.default[err.message]) {
        status = 403;
        message = _error2.default[err.message];
      } else {
        logger.error(err);
        status = 500;
        message = _error2.default.SERVER_ERROR;
      }
      resp.status(status).send({
        success: false,
        message: message
      });
    });
  },
  getData: function getData(req, resp) {
    return userModel.getData(req).then(function (data) {
      resp.status(200).json(data);
    }).catch(function (err) {
      resp.status(500);
    });
  }
};
module.exports = operations;