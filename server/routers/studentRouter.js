import express from "express";
import { addStudent, deleteStudent, getStudents, getUpdateStudent, updateStudent} from "../controllers/studentControllers.js";
const router = express.Router();

router.post('/add-student', addStudent);
router.get('/get-students', getStudents);
router.get('/edit-student/:id', getUpdateStudent);
router.put('/edit-student', updateStudent);
router.delete('/delete-student/:id', deleteStudent);

export default router;