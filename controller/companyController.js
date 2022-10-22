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
const companyModule_1 = require("../module/companyModule");
const JWTverify_1 = require("../service/JWTverify");
const routes = express_1.default.Router();
const app = (0, express_1.default)();
//get company by company_id
routes.get(["/getcompany"], JWTverify_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield (0, companyModule_1.getCompany)(req.body);
    res.status(users.status);
    res.write(JSON.stringify(users.content));
    res.end();
}));
// FUTURE ENDPOINT
routes.get(["/createcompany"], JWTverify_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200);
    res.write(JSON.stringify({ key: "wip" }));
    res.end();
}));
// FUTURE ENDPOINT
routes.post(["/updatecompany"], JWTverify_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200);
    res.write(JSON.stringify({ key: "wip" }));
    res.end();
}));
//FANTASY ENDPOINT
routes.delete(["/deletecompany"], JWTverify_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200);
    res.write(JSON.stringify({ key: "fantasty" }));
    res.end();
}));
//FANTASY ENDPOINT
routes.get(["/getcompanys"], JWTverify_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200);
    res.write(JSON.stringify({ key: "fantasty" }));
    res.end();
}));
exports.default = routes;
