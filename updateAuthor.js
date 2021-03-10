"use strict";

const authors = require('./author.json').author,
updateAuthor = function (req, res) {
         const UpdatedAuthor = req.body;

        const objIndex = authors.findIndex((obj => obj.id == UpdatedAuthor.Id));
        //Update object's name property.
        authors[objIndex].name = UpdatedAuthor.name;
        authors[objIndex].bookWritten = UpdatedAuthor.bookWritten;
        authors[objIndex].year = UpdatedAuthor.year;

        res.status(200);
        res.send(authors[objIndex]);
    };

module.exports = updateAuthor;