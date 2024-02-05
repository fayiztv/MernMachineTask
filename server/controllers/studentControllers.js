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

export async function updateStudent(req, res) {
  const { id } = req.params;
  const { name, email, age } = req.body;

  try {
    const student = await studentModel.findByIdAndUpdate(
      id,
      { name, email, age },
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
