import mongoose from 'mongoose';

async function dbConnect() {
  try {
    await mongoose.connect("mongodb+srv://tvfayiztv:B8CcWyNGer8HgHy6@cluster0.mojc5bi.mongodb.net/?retryWrites=true&w=majority")
    console.log('Database connected');
  } catch (err) {
    console.error('Database error:\n', err);
  }
}

export default dbConnect;
