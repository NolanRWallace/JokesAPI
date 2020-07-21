const JokeController = require("../Controllers/jokes.controller");



module.exports = app => {
    app.get("/jokeapi/alljokes/", JokeController.FindallJokes)
    app.get("/jokeapi/joke/:id", JokeController.findAJoke)
    app.put("/jokeapi/update/joke/:id", JokeController.updateExistingJoke)
    app.post("/jokeapi/create/", JokeController.createNewJoke)
    app.delete("/jokeapi/delete/joke/:id", JokeController.DeleteExistingJoke)
}