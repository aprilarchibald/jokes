const express = require("express");
const app = express();
const port = 8000;
const DB_NAME = "jokes_db"
// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config")(DB_NAME);

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const allMyJokeRoutes = require("./server/routes/joke.routes");
allMyJokeRoutes(app);

app.listen(port, () => console.log("The server is all fired up on port 8000"));