import studentModel from "../models/studentModel.js";

export async function addStudent(req, res) {
  try {
    const student = new studentModel(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


