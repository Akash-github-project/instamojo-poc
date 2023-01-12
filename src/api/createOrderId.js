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
exports.createOrderId = void 0;
const axios_1 = __importDefault(require("axios"));
function createOrderId(paymentRequestId, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const encodedParams = new URLSearchParams();
        encodedParams.set('id', paymentRequestId);
        const options = {
            method: 'POST',
            url: 'https://test.instamojo.com/v2/gateway/orders/payment-request/',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: encodedParams,
        };
        const data = yield axios_1.default
            .request(options)
            .then(function (response) {
            console.log("subdata", response.data);
            return response.data;
        })
            .catch(function (error) {
            console.log("subdata", error);
            return error;
        });
        console.log("this is data", data);
        return data;
    });
}
exports.createOrderId = createOrderId;
