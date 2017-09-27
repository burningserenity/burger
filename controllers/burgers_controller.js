var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.insertOne(
       req.body.name,
     function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    console.log("the put is: " + req.body.devour);
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        req.params.id, function() {
        res.redirect("/");
    });
});

module.exports = router;
