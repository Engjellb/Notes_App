const Notes = require('../models/Notes')
const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    Notes.create(req.body, (err, Notes) => {
        if (err) throw err
        res.json(Notes)
    })
})

router.get('/', (req, res) => {
      Notes.find((err, notes) => {
        if (err) throw err
        res.json(notes)
      })
})

router.get('/:id', (req, res) => {
    Notes.findById(req.params.id, (err, editNote) => {
        if (err) throw err
        res.json(editNote)
    })
})

router.put('/:id', (req, res) => {
    Notes.findByIdAndUpdate(req.params.id, req.body, (err, editedNote) => {
        if (err) throw err
        res.json(editedNote)
    })
})

router.delete('/:id', (req, res) => {
    Notes.findByIdAndRemove(req.params.id, (err, removeNote) => {
        if (err) throw err
        res.json(removeNote)
    })
})
module.exports = router