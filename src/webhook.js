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
//import { client } from "./db/redisInstance";
const webhookRouter = (0, express_1.Router)();
webhookRouter.post("/completed", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ success: "success" });
    // await client.set("response", req.body.toString())
    // res.send({ ok: "" })
    // const newData = await client.get("response")
    // res.send({data:newData})
}));
exports.default = webhookRouter;
