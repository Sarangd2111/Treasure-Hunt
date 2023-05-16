import  express  from "express";
import { signup, login, logout, clue1, clue2, clue3, clue4, clue5, clue6} from "../controllers/auth.js";

const router = express.Router()

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/clue1", clue1);
router.post("/clue2", clue2);
router.post("/clue3", clue3);
router.post("/clue4", clue4);
router.post("/clue5", clue5);
router.post("/clue6", clue6);

export default router