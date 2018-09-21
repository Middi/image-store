const express = require('express');
const router = express.Router();

const Image = require('../models/image');

// CREATE - Add new image to database
router.post('/', (req, res) => {
	const newImage = new Image({
		image: req.body.image,
		title: req.body.title,
		description: req.body.description,
        date: req.body.date
    });
    newImage.save().then(image => res.json(image));
});

module.exports = router;