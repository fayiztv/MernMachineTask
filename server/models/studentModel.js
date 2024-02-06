import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  place: { type: String, required: true },
  phone: { type: Number, required: true },
  age: { type: Number, required: true }
});

const StudentModel = mongoose.model("Students", schema);
export default StudentModel;