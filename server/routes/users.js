const Users = require('../models/Users')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

router.post('/', (req, res) => {

    const user = new Users({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Email: req.body.Email,
        Password: req.body.Password
    })

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.Password, salt, (err, hash) => {
            if (err) throw err
            user.Password = hash
            user.save((err, users) => {
                if (err) throw err
                res.json(users)
            })
        })
    })

    
})

module.exports = router