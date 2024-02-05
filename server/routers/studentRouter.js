import express from "express";
import { addStudent, updateStudent} from "../controllers/studentControllers.js";
const router = express.Router();

router.post('/add', addStudent);
router.put('/edit-student/:id', updateStudent);


export default router;