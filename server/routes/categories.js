var Category = require('../models/Category');
var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    Category.create(req.body, (err, category) => {
        if (err) throw err;
        res.json(category);
    });
});

router.get('/', (req, res) => {
    Category.find({}, (err, categories) => {
        if (err) throw err;
        res.json(categories);
    });
});

module.exports = router;