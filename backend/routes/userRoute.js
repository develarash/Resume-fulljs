import express from "express";
import {
    getUsers,createUser,handleLogin,searchquery

} from "../controller/UserControllser.js";

const router = express.Router();

router.get('/user', getUsers);
router.post('/user', createUser);
router.post('/user/login', handleLogin);
router.get('/q/', searchquery);

export default router;