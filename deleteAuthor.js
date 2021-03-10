"use strict";

const authors = require('./author.json').author,
    deleteAuthor = function (req, res) {
        const Id = req.body.Id;

       authors.splice(apps.findIndex(a => a.id === Id), 1)

        res.status(200);
        res.send("Data deleted successfully");
    };

module.exports = deleteAuthor;