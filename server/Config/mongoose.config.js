const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jokeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection Established"))
.catch(err => console.log("Connection Failed", err))