/**
 * Created by jro on 29/10/2016.
 */
var express = require("express");
var azuremobileapps = require("azure-mobile-apps");

var app = express();
var mobile = azuremobileapps(swagger: process.env.NODE_ENV !== 'production');



mobile.table.import("./tables")

mobile.api.import("./api")

app.use(mobile)

app.listen(process.env.PORT || 3000);

