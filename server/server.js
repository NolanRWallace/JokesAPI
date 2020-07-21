const express = require("express");
const app = express()
require("./Config/mongoose.config");

app.use(
    express.json(),
    express.urlencoded({extended: true}),
)

require("./Routes/jokes.routes")(app)

app.listen(8000, () => {
    console.log("Listening on port 8000")
});

