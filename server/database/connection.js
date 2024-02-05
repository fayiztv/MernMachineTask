import mongoose from 'mongoose';

async function dbConnect() {
  try {
    await mongoose.connect("mongodb://localhost:27017")
    console.log('Database connected');
  } catch (err) {
    console.error('Database error:\n', err);
  }
}

export default dbConnect;
