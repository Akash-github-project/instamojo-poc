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
exports.getAccessToken = void 0;
const axios_1 = __importDefault(require("axios"));
function getAccessToken() {
    return __awaiter(this, void 0, void 0, function* () {
        const encodedParams = new URLSearchParams();
        encodedParams.set('grant_type', 'client_credentials');
        encodedParams.set('client_id', 'test_O3TurocdaQbXqlhqKHgAsmv4tYtdB2u7tHE');
        encodedParams.set('client_secret', 'test_iVUC1dadRhpvliE9SEuiPrrGji47KvelcNLuTtdEfaRxbYkAgaa1I5SwkKM4vQy7ZtM3kyV5IyTXzL2HdRKcNutP25zWFVZibIZVfwAzWMGd7Yfh27Dmhtm0On7');
        const options = {
            method: 'POST',
            url: 'https://test.instamojo.com/oauth2/token/',
            headers: {
                accept: 'application/json',
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: encodedParams,
        };
        const response = yield axios_1.default
            .request(options)
            .then((response) => response)
            .catch((error) => error.response);
        if (response.status !== 200) {
            console.log("error happened", response);
            return { data: response.status };
        }
        return { data: response.data.access_token };
    });
}
exports.getAccessToken = getAccessToken;
