const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is Required"],
        minlength: [10, 'setup has to be at least 10 characters in length']
    },
    punchline: {
        type: String,
        required: [true, "Punchline is Required"],
        minlength: [3, "Punchline has to be at least 3 characters in length"]
    }
})

const Joke = mongoose.model("Joke", JokeSchema)

module.exports = Joke