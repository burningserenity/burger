var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, sql) {
            if (err) throw err;
            console.log(sql);
            cb(sql);
        });
    },

    insertOne: function(burger_name, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, burger_name, function(err, sql) {
            console.log(sql);
            cb(sql);
        });
    },

    updateOne: function(burger_id, cb) {
        console.log("orm reads: " + burger_id);
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [burger_id], function(err, sql) {
            console.log(sql);
            cb(sql);
        });
    }
};

module.exports = orm;
