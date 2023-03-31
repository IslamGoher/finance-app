import mongoose from "../../node_modules/mongoose/index.js";
const Schema = mongoose.Schema;

// create a children Schema
const bookSchema = new Schema({
  author: {
    type: String,
    required: [true, "add name"]
  },
  title: {
    type: String,
    required: [true, "add title"]
  },
  numberOfPages: {
    type: Number,
    required: [true, "add numberOfPages"]
  }
});

module.exports = mongoose.model("Book", bookSchema);
