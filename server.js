// Dependencies
let express = require("express"),
    path = require("path");

// Setup the Express App
let app = express(),
    PORT = process.env.PORT || 3000;

// Setup the Express app to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
