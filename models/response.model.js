"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedRersponse = exports.ErrorRersponse = void 0;
class ErrorRersponse {
    constructor(error) {
        this.content = error;
        this.status = 500;
    }
}
exports.ErrorRersponse = ErrorRersponse;
class UnauthorizedRersponse {
    constructor() {
        this.content = "Nao Autorizado";
        this.status = 401;
    }
}
exports.UnauthorizedRersponse = UnauthorizedRersponse;
