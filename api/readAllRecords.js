/**
 * Created by jro on 29/10/2016.
 */
var api = {

    get: function (req, res, next) {

        //check the params
        if (typeof req.params.length < 0 ){
            print("params.length < 0");
            return next();
        }

        var context = req.azureMobile;
        var user = context.user.id;

        var query = {
            sql: "select * from News"
        };

        req.azureMobile.data.exec(query)
            .then(function (result) {
                print("RESULT QUERY GET");
                res.json(result);
        });
    }
}

//api.get.access = 'authenticated';
api.get.access = 'anonymous';
module.exports = api;