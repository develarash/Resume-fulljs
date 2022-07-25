import Blogs from "../models/blogsModel.js";

export const getblogs =async (req,res)=>{
    try{
const response=await Blogs.findAll();
res.status(200).json(response);

    }
    catch(error){
        console.log(error.message);
    }
}
export const createblog = async(req, res) =>{
    try {
        await Blogs.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}
export const getblogSingle =async (req,res)=>{
    try{
    const thisid=req.params.id;
const response=await Blogs.findOne({ where: { id: `${thisid}` } });
if (!response) {
    res.status(404).json({message:"user not found"});
    console.log('Not found!');
 
}
res.status(200).json(response);
console.log(response)
    }
    catch(error){
        console.log(error.message);
    }
}

export const deleteblog =async (req,res)=>{
  
        
    const rightid=req.params.id;
    const oneres=await Blogs.findOne({ where: { id: `${rightid}` } });
    if (!oneres) {
        return res.status(404).json({ error: "couldnt find any user" });
        
      }
 

    const response=await Blogs.destroy({ where: { id: `${rightid}` } });
    if (!response) {
      res.status(404).json({message:` ${id} user not found any user to delete from table`});
        console.log(`Not found! ${id}`);
     
    
    }
    res.status(200).json(response);
    console.log(response)


    
}



export const Updateblog =async (req,res)=>{
  
        
    const rightid=req.params.id;
    const ifexist=await Blogs.findOne({ where: { id: req.params.id } });
    if (!ifexist) {
        return res.status(404).json({ error: "couldnt find any user" });
        
      }
 
try{
    
    const response=await Blogs.update(req.body,{
        where:{
            id: req.params.id
        }
    });;
    
    if (!response) {
      res.status(404).json({message:` ${id} user not found any user to delete from table`});
        console.log(`Not found! ${id}`);
     
    
    }
    res.status(200).json(response);
    console.log("uploaded succes")


    
}
catch(error){
    console.log(error.message);
}
}