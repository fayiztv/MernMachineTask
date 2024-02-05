import express from "express";
import { addStudent, deleteStudent, getStudents, updateStudent} from "../controllers/studentControllers.js";
const router = express.Router();

router.post('/add', addStudent);
router.get('/students',getStudents)
router.put('/edit-student/:id', updateStudent);
router.delete('/delete-student/:id', deleteStudent);


export default router;