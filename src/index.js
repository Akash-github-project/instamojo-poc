"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const create_1 = __importDefault(require("./api/create"));
const webhook_1 = __importDefault(require("./webhook"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (_, res) => {
    res.send({ everything: "ok" });
});
app.use("/api", create_1.default);
app.use("/detail", webhook_1.default);
app.listen(process.env.PORT || 3000);
console.log("server runnning on port 80");
