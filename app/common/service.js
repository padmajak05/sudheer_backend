const path = require("path");
const fs = require('fs');
const logger = require("../utils/logger");

function service () {
    const res = fs.readFileSync(path.resolve(__dirname+'/../data/loginData.json'));
    return new Promise((resolve) => {
        resolve(JSON.parse(res));
    });
}

module.exports = service;