/**
 * Created by jro on 29/10/2016.
 */
var azureMobileApps = require("azure-mobile-apps");

var table = azureMobileApps.table();

table.columns = {
    "Title": "string",
    "Text": "string",
    "Author": "string",
    "Photo": "string",
    "Published": "boolean",
    "Latitude": "number",
    "Longitude": "number",
    "AverageRate": "number",
    "PublishedDate": "date",
    "LocationName": "string"
};

table.dynamicSchema = false; // asi haces que no se pueda modificar el schema de la tabla y se quede como lo hemos creado

/*
* Trigger para insert
* */

table.insert(function (context) {
    context.item.idUsuario = context.user.id; // estamos creando una columna idUsuario a la que le ponemos el id del usuario que nos hemos traido de facebook
    return context.execute();
});

table.read(function (context) {
    context.query.where({usuario: context.user.id});
    return context.execute();
});

/*
* Permisos de acceso a la table
* */

table.read.access = 'anonymous';
table.update.access = 'anonymous';
table.delete.access = 'anonymous';
table.insert.access = 'anonymous';

module.exports = table;
