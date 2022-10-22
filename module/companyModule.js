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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompany = void 0;
const client_1 = require("@prisma/client");
const response_model_1 = require("../models/response.model");
const prisma = new client_1.PrismaClient();
function getCompany(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!!req.company) {
                const company = yield prisma.company.findFirst({
                    where: {
                        id_company: {
                            equals: req.company,
                        },
                    },
                });
                return {
                    content: company,
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
exports.getCompany = getCompany;
