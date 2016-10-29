/**
 * Created by jro on 29/10/2016.
 */
var azureMobileApps = require("azure-mobile-apps");

var table = azureMobileApps.table();

table.columns = {
    "name": "string",
    "secondName": "string"
};


/*
* Permisos de acceso a la table
* */

table.read.access = 'anonymous';
table.update.access = 'authenticated';
table.delete.access = 'authenticated';
table.insert.access = 'authenticated';

module.exports = table;
