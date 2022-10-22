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
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verifyToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.headers["token"];
            if (!!!token) {
                return res
                    .status(401)
                    .json({ auth: false, message: "Token indefinido." });
            }
            jsonwebtoken_1.default.verify(token, "eb7d887a714a628fd6c87eb85d9f6cd413909746536519aaad7471b57bd02f90", (err, decoded) => {
                if (err)
                    return res
                        .status(500)
                        .json({ auth: false, message: "Falha ao autenticar token." });
                // se tudo estiver ok, salva no request para uso posterior
                req.body.user = decoded.user;
                req.body.company = decoded.company;
                req.body.operator = decoded.operator;
                req.body.operational = decoded.operational;
                req.body.manager = decoded.manager;
                next();
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.verifyToken = verifyToken;
