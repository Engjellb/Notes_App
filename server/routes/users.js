const Users = require('../models/Users');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

router.post('/', (req, res) => {

    const user = new Users({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Email: req.body.Email,
        Password: req.body.Password
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.Password, salt, (err, hash) => {
            if (err) throw err;
            user.Password = hash;
            user.save((err, users) => {
                if (err) throw err;
                res.json(users);
            });
        });
    });
});

router.post('/signin', async (req, res) => {

    const {email, password} = req.body;

    try {
        let user = await Users.findOne({
            Email: email
        });
        if (!user) {
            return res.status(400).send({
                message: 'User does not exist'
            });
        };

        const isMatch = await bcrypt.compare(password, user.Password);

        if (!isMatch) {
            return res.status(400).send({
                message: 'Incorrect password'
            });
        };

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, 'secret', {expiresIn: 3600}, (err, token) => {
          if (err) throw err;
          res.status(200).send({
            token,
            user
          })
        });
    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: 'Server error'
        });
    };
});

router.get('/me', auth, async (req, res) => {
    try {
        const user = await Users.findById(req.user.id);
        res.send(user);
    } catch (e) {
        res.send({message: 'Error in fetching user'})
    };
});


module.exports = router;