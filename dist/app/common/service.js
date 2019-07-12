"use strict";

var path = require("path");
var fs = require('fs');
var logger = require("../utils/logger");

function service() {
    var res = fs.readFileSync(path.resolve(__dirname + '/../data/loginData.json'));
    return new Promise(function (resolve) {
        resolve(JSON.parse(res));
    });
}

module.exports = service;