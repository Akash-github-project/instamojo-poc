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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const getAccessToekn_1 = require("../helper/getAccessToekn");
const createOrderId_1 = require("./createOrderId");
const router = (0, express_1.Router)();
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: dataOrError } = yield (0, getAccessToekn_1.getAccessToken)();
    if (typeof dataOrError === "number") {
        res.send({ error: dataOrError });
        return;
    }
    const body = req.body;
    const { email, phone, purpose, buyer_name, amount } = body;
    const encodedParams = new URLSearchParams();
    encodedParams.set('allow_repeated_payments', 'false');
    encodedParams.set('send_email', 'false');
    encodedParams.set('amount', amount);
    encodedParams.set('purpose', purpose);
    encodedParams.set('buyer_name', buyer_name);
    encodedParams.set('email', email);
    encodedParams.set('phone', phone);
    encodedParams.set('webhook', `${constants_1.baseURL}/detail/completed`);
    const options = {
        method: 'POST',
        url: 'https://test.instamojo.com/v2/payment_requests/',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${dataOrError}`,
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: encodedParams,
    };
    axios_1.default
        .request(options)
        .then(function (response) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("before data", response);
            const orderIdData = yield (0, createOrderId_1.createOrderId)(response.data.id, dataOrError);
            console.log("data", JSON.stringify(orderIdData));
            res.send({ created: orderIdData });
        });
    })
        .catch(function (error) {
        console.log("error", JSON.stringify(error));
        res.send({ created: error.response });
    });
}));
exports.default = router;
