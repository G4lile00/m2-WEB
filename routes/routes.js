"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const companyController_1 = __importDefault(require("../controller/companyController"));
const userController_1 = __importDefault(require("../controller/userController"));
const loginController_1 = __importDefault(require("../controller/loginController"));
const locationController_1 = __importDefault(require("../controller/locationController"));
function Routes() {
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/", companyController_1.default);
    app.use("/", userController_1.default);
    app.use("/", loginController_1.default);
    app.use("/", locationController_1.default);
    return app;
}
exports.Routes = Routes;
