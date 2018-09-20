const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
var cloudinary = require('cloudinary');
const multer = require('multer');
var Datauri = require('datauri');
const axios = require('axios');
const items = require('./backend/routes/items');
const cors = require('cors');
const app = express();



const Image = require('./backend/models/image');


app.use(cors());



// File Name extension for Multer
var ext = "";
var upload = multer();

cloudinary.config({
	cloud_name: 'middi',
	api_key: '963882663421214',
	api_secret: 'F4p7vxCEa-ts7SCLx8Y1iCeJEMA'
  });

  


// Bodyparser Middleware
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// DB Config
const db = require('./keys').mongoURI;

// Use Routes
app.use('/api/items', items);





// CREATE - Add new image to database
app.post('/upload', (req, res) => {
	const newImage = new Image({
        image: req.body.data
    });
    newImage.save().then(image => res.json(image));
});




app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

// Connect to Mongo
mongoose.connect(db || process.env.mongoURI)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

// Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));