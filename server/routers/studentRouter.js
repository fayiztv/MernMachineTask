import express from "express";
import { addStudent, deleteStudent, findStudents, getStudents, updateStudent} from "../controllers/studentControllers.js";
const router = express.Router();

router.post('/add', addStudent);
router.get('/students', getStudents);
router.put('/edit-student/:id', updateStudent);
router.delete('/delete-student/:id', deleteStudent);
router.get('/search', findStudents); 

export default router;