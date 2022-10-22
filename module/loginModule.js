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
exports.login = void 0;
const client_1 = require("@prisma/client");
const response_model_1 = require("../models/response.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
function login(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!!req) {
                const user = yield prisma.users.findFirst({
                    where: {
                        ds_email: {
                            equals: req.login,
                        },
                    },
                });
                if (!user) {
                    return {
                        content: "usuario nao encontrado",
                        status: 401,
                    };
                }
                if (yield bcrypt_1.default.compare(req.password, user.ds_password)) {
                    const token = jsonwebtoken_1.default.sign({
                        user: user.id_user,
                        company: user.cd_company,
                        operator: user.id_operator,
                        manager: user.id_manager,
                        operational: user.id_operational,
                    }, "eb7d887a714a628fd6c87eb85d9f6cd413909746536519aaad7471b57bd02f90", { expiresIn: "1h" });
                    return {
                        content: token,
                        status: 200,
                    };
                }
                else {
                    return new response_model_1.UnauthorizedRersponse();
                }
            }
        }
        catch (error) {
            console.log(error);
            return new response_model_1.ErrorRersponse(error);
        }
        return new response_model_1.ErrorRersponse("Erro indefinido");
    });
}
exports.login = login;
