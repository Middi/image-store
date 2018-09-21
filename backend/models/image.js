const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const ImageSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
});

module.exports = Image = mongoose.model('image', ImageSchema);