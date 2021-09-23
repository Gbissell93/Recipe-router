const  mongoose = require('mongoose');

const animalShcema = new mongoose.Schema({
    animalType: {
        type: String,
    },
    animalName: {
        type: String
    },
    animalAge: {
        type: Number
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("animal", animalShcema);