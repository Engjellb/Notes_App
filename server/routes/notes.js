const Notes = require('../models/Notes');
const Category = require('../models/Category');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    Notes.create(req.body, (err, note) => {
        if (err) throw err;
        res.json(note);
    });
});

router.post('/:id', async (req, res) => {
    category = req.params;
    id = category.id;

    const { Title, Description } = req.body;

    const note = await Notes.create({
        Title,
        Description,
        Category: id
    });

    await note.save();

    const categoryById = await Category.findById(id);

    categoryById.notes.push(note);
    await categoryById.save();

    
});

router.get('/populate/:id', async (req, res) => {
    const { id } = req.params;

    const category = await Category.findById(id).populate('notes');

    res.send(category);
});

router.get('/', (req, res) => {
      Notes.find((err, notes) => {
        if (err) throw err;
        res.json(notes);
      });
});

router.get('/:id', (req, res) => {
    Notes.findById(req.params.id, (err, editNote) => {
        if (err) throw err;
        res.json(editNote);
    });
});

router.put('/:id', (req, res) => {
    Notes.findByIdAndUpdate(req.params.id, req.body, (err, editedNote) => {
        if (err) throw err;
        res.json(editedNote);
    });
});

router.delete('/:id', (req, res) => {
    Notes.findByIdAndRemove(req.params.id, (err, removeNote) => {
        if (err) throw err;
        res.json(removeNote);
    });
});
module.exports = router;