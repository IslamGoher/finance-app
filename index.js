import { connectDB } from "./database/connection.js";
import { BookModel } from "./database/models/book.js";

(
  async function() {
    await connectDB();
    const books = await BookModel.findBooks();
    console.log(books);
  }
)();
