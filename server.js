const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const booksController = require("./Controller/booksController");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use (express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// If deployed, use the deployed database. Otherwise use the local googlebooks database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI,{useNewUrlParser: true});


//API routes
// Matches with "/api/books" and export mongoose
app.route("/api/books")
  // .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
app
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
