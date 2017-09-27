var orm = require("../config/orm.js");


var burger = {

    // Show all burgers in database
    selectAll: function(cb) {
        orm.selectAll(function(result) {
            cb(result);
        });
    },

    // Insert a burger into the table
    insertOne: function(burger_name, cb) {
        console.log("it is: " + burger_name);
        orm.insertOne(burger_name, function(result) {
            cb(result);
        });
    },

    // Update a burger
    updateOne: function(burger_id, cb) {
        console.log("burger_id = " + burger_id);
        orm.updateOne(burger_id, function(result) {
            cb(result);
        });
    },
}
    
module.exports = burger;
