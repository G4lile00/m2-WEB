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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUsers = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const response_model_1 = require("../models/response.model");
const prisma = new client_1.PrismaClient();
function getUsers(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!!req.company) {
                const users = yield prisma.users.findMany({
                    where: {
                        cd_company: {
                            equals: req.company,
                        },
                    },
                });
                return {
                    content: users,
                    status: 200,
                };
            }
        }
        catch (error) {
            console.log(error);
            return new response_model_1.ErrorRersponse(error);
        }
        return new response_model_1.ErrorRersponse("Erro indefinido");
    });
}
exports.getUsers = getUsers;
function createUser(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!!req) {
                const hashedPassword = yield bcrypt_1.default.hash(req.password, 10);
                yield prisma.users.create({
                    data: {
                        ds_email: req.login,
                        ds_name: req.name,
                        ds_password: hashedPassword,
                        cd_company: 2,
                        id_operator: true,
                    },
                });
                return {
                    content: "usuario Criado",
                    status: 200,
                };
            }
        }
        catch (error) {
            console.log(error);
            return new response_model_1.ErrorRersponse(error);
        }
        return new response_model_1.ErrorRersponse("Erro indefinido");
    });
}
exports.createUser = createUser;
function updateUser(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!!req) {
                const hashedPassword = yield bcrypt_1.default.hash(req.password, 10);
                yield prisma.users.update({
                    where: {
                        id_user: req.user,
                    },
                    data: {
                        ds_name: req.name,
                        ds_password: hashedPassword,
                    },
                });
                return {
                    content: "usuario Atualizado",
                    status: 200,
                };
            }
        }
        catch (error) {
            console.log(error);
            return new response_model_1.ErrorRersponse(error);
        }
        return new response_model_1.ErrorRersponse("Erro indefinido");
    });
}
exports.updateUser = updateUser;
function deleteUser(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!!req) {
                yield prisma.users.delete({
                    where: {
                        id_user: req.user,
                    },
                });
                return {
                    content: "usuario Removido",
                    status: 200,
                };
            }
        }
        catch (error) {
            console.log(error);
            return new response_model_1.ErrorRersponse(error);
        }
        return new response_model_1.ErrorRersponse("Erro indefinido");
    });
}
exports.deleteUser = deleteUser;
