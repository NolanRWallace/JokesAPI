const Joke = require("../Models/jokes.model");



module.exports.FindallJokes = (req, res) => {
    Joke.find()
    .then(allJokesData => res.json({ jokes: allJokesData }))
    .catch(err => res.json({message: "Something went wrong", error:err}))
}

module.exports.findAJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(oneJokeData => res.json({ joke: oneJokeData}))
    .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => res.json({ Joke: newJoke}))
    .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.param.id}, req.body, {new: true})
    .then(updatedJoke => res.json({Joke: updatedJoke}))
    .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.DeleteExistingJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: "Something went wrong", error: err}))
}