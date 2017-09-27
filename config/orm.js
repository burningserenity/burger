var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, sql) {
            if (err) throw err;
            console.log(sql);
            cb(sql);
        });
    },

    insertOne: function(tableInput, col, valOfCol, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, col, valOfCol], function(err, sql) {
            console.log(sql);
        });
        cb(sql);
    },

    updateOne: function(tableInput, updatedCol, valOfUpdate, colToSearch, valOfSearch, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, updatedCol, valOfUpdate, colToSearch, valOfSearch], function(err, sql) {
            console.log(sql);
        });
        cb(sql);
    }
};

module.exports = orm;
