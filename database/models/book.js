import BookSchema from "../schemas/book.js";

class BookModel extends BookSchema{
  static async addBook(bookData) {
    return await BookSchema.create(bookData, {}, {rawResult: true});
  }

  static async findBookByID(bookID) {
    return await BookSchema.findById(bookID, {}, {rawResult: true});
  }
  
  static async findBooks() {
    return await BookSchema.find({}, {}, {rawResult: true});
  }
}

module.exports.BookModel = BookModel;