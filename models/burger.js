var orm = require("../config/orm.js");


var burger = {

    // Show all burgers in database
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        });
    },

    // Insert a burger into the table
    insertOne: function(cb) {
        orm.insertOne("burgers", "burger_name", valOfCol, function(result) {
            cb(result);
        });
    },

    // Update a burger
    updateOne: function(cb) {
        orm.updateOne("burgers", updatedCol, valOfUpdate, colToSearch, valOfSearch, function(result) {
            cb(result);
        });
    },
}
    
module.exports = burger;
