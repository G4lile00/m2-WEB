"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const routes_1 = require("./routes/routes");
const httpPort = 4000;
let app = (0, routes_1.Routes)();
var httpServer = http.createServer(app);
httpServer.listen(httpPort, () => {
    console.log("http://domain.name");
});
