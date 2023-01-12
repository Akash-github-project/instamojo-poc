"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const redis_1 = require("redis");
const constants_1 = require("../constants");
exports.client = (0, redis_1.createClient)({
    socket: {
        host: constants_1.redisURL,
        port: constants_1.redisPort
    },
    password: ""
});
exports.client.on('error', err => {
    console.log('Error ' + err);
});
