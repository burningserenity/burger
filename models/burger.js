var orm = require("./config/orm.js");

// Show all burgers in database
orm.selectAll("burgers", function(result) {
    var data = result;
    console.log(result);
});

// Show specific burgers
orm.selectWhere("burgers", colToSearch, valOfCol, function(result) {
    var data = result;
    console.log(result);
});

// Insert a burger into the table
orm.insertOne("burgers", "burger_name", valOfCol, function(result) {
    var data = result;
    console.log(result);
});

// Update a burger
orm.updateOne("burgers", updatedCol, valOfUpdate, colToSearch, valOfSearch, function(result) {
    var data = result;
    console.log(result);
});

module.exports = burger;
