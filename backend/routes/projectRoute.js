import express from "express";
import {
    getProjects, CreateProjects

} from "../controller/ProjectsController.js";

const router = express.Router();

router.get('/Projects', getProjects);
router.post('/Projects', CreateProjects);

export default router;