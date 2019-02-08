const router = require("express").Router();
const Book = require("../models/Book.js");

router.post("/api/book", (req, res) => {
    
    Book.create(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.get("/api/books", (req, res) => {
    
    Book.find(
    ).then((docs) => {
        res.json(docs);
    });
});

module.exports = router;