"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = 4000;
app.get("/", (_, res) => {
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
    axios_1.default
        .request(options)
        .then(function (response) {
        console.log(response.data);
        res.send(response.data);
    })
        .catch(function (error) {
        console.error(error);
        res.send(error.response);
    });
});
app.listen(PORT);
console.log("server runnning on port 4000");
