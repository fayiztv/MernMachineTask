import StudentModel from "../models/studentModel.js";
import studentModel from "../models/studentModel.js";

export async function addStudent(req, res) {
  try {
    const student = new studentModel(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export async function getStudents(req, res) {
  try {
    const students = await studentModel.find({});
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getUpdateStudent(req, res) {
  const id = req.params.id;

  const student = await StudentModel.findById(id).lean();
  res.status(200).json(student);
}

export async function updateStudent(req, res) {
  const  id = req.body.id 
  const { name, email, place, age, phone } = req.body;

  try {
    const student = await studentModel.findByIdAndUpdate(
      id,
      { name, email, place, age, phone },
      { new: true }
    );
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteStudent(req, res) {
  const { id } = req.params;

  try {
    const student = await studentModel.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
