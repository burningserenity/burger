var express = require('express');
var burger = require('./models/burger.js');

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
    burger.insertOne([
        "burgers"
    ], [
        "burger_name"
    ], [
        req.body.name
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne([
        "burgers"
    ], [
        req.body.name
    ], [
        req.body.column
    ], [
        req.body.newValue
    ], [
        req.body.parameter
    ], [
        req.body.setValue
    ], function() {
        res.redirect("/");
    });
});

module.exports = router;