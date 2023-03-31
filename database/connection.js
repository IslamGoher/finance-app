import mongoose from 'mongoose';

const mongoURI = "mongodb+srv://sam12345:sam12345@cluster0.sft7v.mongodb.net/finance?retryWrites=true&w=majority";

// Connect to DB;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI);
  
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }
  catch (error) {
    console.log(error.message);
  }
}

// Export db file
module.exports.connectDB = connectDB;