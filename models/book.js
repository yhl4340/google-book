const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const api = '../routes/api/bookApi'

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
