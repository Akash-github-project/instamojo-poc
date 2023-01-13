"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const redisInstance_1 = require("../../db/redisInstance");
const testingRouter = (0, express_1.Router)();
testingRouter
    .get("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { key } = req.query;
    if (key === "forbidden") {
        res.status(403).send({ response: "Forbidden" });
        return;
    }
    if (key === "notfound") {
        res.status(404).send({ response: "Not Found" });
        return;
    }
    if (key === "pf") {
        res.status(412).send({ response: "Precondition Failed" });
        return;
    }
    console.log(key, "this key");
    yield redisInstance_1.client.connect();
    const data = yield redisInstance_1.client.get(key);
    // client.on("ready",())
    yield redisInstance_1.client.disconnect();
    res.send({ response: data });
}))
    .post("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { key, value } = req.body;
    if (key === "forbidden") {
        res.status(403).send({ response: "Forbidden" });
        return;
    }
    if (key === "notfound") {
        res.status(404).send({ response: "Not Found" });
        return;
    }
    if (key === "pf") {
        res.status(412).send({ response: "Precondition Failed" });
        return;
    }
    yield redisInstance_1.client.connect();
    console.log("connected");
    const status = yield redisInstance_1.client.set(key, value);
    res.send({ response: status });
    yield redisInstance_1.client.disconnect();
}));
exports.default = testingRouter;
