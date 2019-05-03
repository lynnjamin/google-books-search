const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: [String],
  description: String,
  image: String,
  link: String,
  title: { type: String, required: true },
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;
