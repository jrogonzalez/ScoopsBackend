/**
 * Created by jro on 29/10/2016.
 */

var azureMobileApps = require("azure-mobile-apps");

var api = {

    get: function (req, res, next) {
        console.log("ENTRADA EN EL GET");

        //check the params
        if (typeof req.params.length < 0 ){
            console.log("params.length < 0");
            return next();
        }

        var context = req.azureMobile;
        //var user = context.user.id;


        var query = {
            sql: "select * from News Where Published = " + req.query["published"]
        };

        req.azureMobile.data.execute(query)
            .then(function (result) {
                console.log("RESULT QUERY GET");
                res.json(result);
        });
    }
};

//api.get.access = 'authenticated';
api.get.access = 'anonymous';
module.exports = api;