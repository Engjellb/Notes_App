const Contact = require('../models/Contact');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { firstName, lastName, phoneNumber, message, email } = req.body;
    Contact.create(req.body, (err, contacts) => {
        if(err) throw err;
        res.json(contacts);
    });
});

router.get('/', (req, res) => {
  Contact.find({}, (err, contacts) => {
    if(err) throw err;
    res.json(contacts);
  });
});  

module.exports = router;