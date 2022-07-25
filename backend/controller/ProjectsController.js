import  ProjectsResume from "../models/projectModel.js";
import { v1 as uuidv1 } from 'uuid';


export const getProjects =async (req,res)=>{
    try{
const response=await ProjectsResume.findAll();
res.status(200).json(response);

    }
    catch(err){
        console.log(err.message);
    }
}
export const CreateProjects = async(req, res) =>{
    try {
        let myid = req.body.myid;
        console.log("your id is ",myid)
        await ProjectsResume.create(req.body);
        res.status(201).json({msg: "ProjectsResume Created"});
    } catch (error) {
        console.log(error.message);
    }
}
