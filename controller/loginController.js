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
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const app = (0, express_1.default)();
const loginModule_1 = require("../module/loginModule");
// log into sistem and make token
routes.post(["/login"], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let token = yield (0, loginModule_1.login)(req.body);
    res.status(token.status);
    res.json({ auth: true, token: token.content });
    res.end();
}));
routes.post(["/logout"], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let token = yield (0, loginModule_1.login)(req.body);
    res.status(200);
    res.json({ auth: false, token: null });
    res.end();
}));
exports.default = routes;
