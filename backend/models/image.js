const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const ImageSchema = new Schema({
    image: {
        type: String,
        required: true
    }
});

module.exports = Image = mongoose.model('image', ImageSchema);