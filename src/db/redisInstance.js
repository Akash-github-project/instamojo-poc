"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const redis_1 = require("redis");
const constants_1 = require("../constants");
exports.client = (0, redis_1.createClient)({
    url: `${constants_1.redisURL}:${constants_1.redisPort}`,
});
// client.on("error", (err) => {
//   console.log("Error " + err)
// })
