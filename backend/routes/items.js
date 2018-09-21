const express = require('express');
const router = express.Router();

// Item Model
const Image = require('../models/image');

// Get request
router.get('/', (req, res) => {
    Image.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// Delete request
router.delete('/:id', (req, res) => {
    Image.findOneAndRemove({ id: req.params.id },  function(err) {
        if (err)
            res.send(err);
        else
            res.json({ message: 'Item Deleted!'});
    });
});
module.exports = router;