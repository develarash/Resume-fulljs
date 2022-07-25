import express from "express";
import {
    getblogs, createblog,getblogSingle,deleteblog,
    Updateblog
,
} from "../controller/BlogController.js";

const router = express.Router();

router.get('/blogs', getblogs);
router.get('/blogs/:id', getblogSingle);
router.post('/blogs', createblog);
router.delete('/blogs/:id', deleteblog);
router.patch('/blogs/:id', Updateblog);



export default router;