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
const JWTverify_1 = require("../service/JWTverify");
const routes = express_1.default.Router();
const app = (0, express_1.default)();
// FUTURE ENDPOINT
routes.get(["/getlocation"], JWTverify_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200);
    res.write(JSON.stringify({ key: "wip" }));
    res.end();
}));
// FUTURE ENDPOINT
routes.get(["/createlocation"], JWTverify_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200);
    res.write(JSON.stringify({ key: "wip" }));
    res.end();
}));
// FUTURE ENDPOINT
routes.post(["/updatelocation"], JWTverify_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200);
    res.write(JSON.stringify({ key: "wip" }));
    res.end();
}));
//FANTASY ENDPOINT
routes.delete(["/deletelocation"], JWTverify_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200);
    res.write(JSON.stringify({ key: "fantasty" }));
    res.end();
}));
//FANTASY ENDPOINT
routes.get(["/getlocations"], JWTverify_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200);
    res.write(JSON.stringify({ key: "fantasty" }));
    res.end();
}));
exports.default = routes;
