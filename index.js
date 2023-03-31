import { connectDB } from "./database/connection";
import { BookModel } from "./database/models/book";

(
  async function() {
    await connectDB();
    const books = await BookModel.findBooks();
    console.log(books);
  }
)();
