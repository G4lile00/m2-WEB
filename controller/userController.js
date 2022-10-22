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
const JWTverify_1 = require("../service/JWTverify");
const userModule_1 = require("../module/userModule");
//list  users by company
routes.get(["/getusers"], JWTverify_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield (0, userModule_1.getUsers)(req.body);
    res.status(users.status);
    res.write(JSON.stringify(users.content));
    res.end();
}));
// make a new user
routes.put(["/usercreate"], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield (0, userModule_1.createUser)(req.body);
    res.status(users.status);
    res.write(JSON.stringify(users.content));
    res.end();
}));
//update user info
routes.post(["/userupdate"], JWTverify_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield (0, userModule_1.updateUser)(req.body);
    res.status(users.status);
    res.write(JSON.stringify(users.content));
    res.end();
}));
//delete user
routes.delete(["/userdelete"], JWTverify_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield (0, userModule_1.deleteUser)(req.body);
    res.status(users.status);
    res.write(JSON.stringify(users.content));
    res.end();
}));
exports.default = routes;
