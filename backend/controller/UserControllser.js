import Users  from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const getUsers =async (req,res)=>{
    try{
const response=await Users.findAll();
res.status(200).json(response);

    }
    catch(err){
        console.log(err.message);
    }
}
export const createUser = async(req, res) =>{
    const { username, email, password } = req.body;

    const ifexist=await Users.findOne({
        where: {
            email: email,
        },
      });
        if(ifexist)
{
    return res.status(404).json({ error: "User already registered" });
}
 const hash=await bcrypt.hash(password,10);

    try {
        
        await Users.create({ username, email, password:hash });
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}




export const handleLogin = async(req, res) =>{
    const { username, email } = req.body;
  const interedpassword=req.body.password;

    const ifexist=await Users.findOne({
        where: {
            email: email,
        },
      });

      if(!ifexist){
        return res.status(404).json({ message: "Email doesnt exist" });
      }
    
      console.log(interedpassword+" "+ifexist.password);
      const isEqual=await bcrypt.compare(interedpassword,ifexist.password);
    
       
      if(isEqual){
        // const jwt_secret="j1jh2j1h2l";
        const token=jwt.sign({ifexist:{
            userId:ifexist.id,
            email:ifexist.email,
            username:ifexist.username,

        }},
        process.env.JWT_SECRET,{
        expiresIn: "1h"
        })
        return res.status(200).json({ token,userId:ifexist.id});

      

      }
      return res.status(404).json({ message: "password isnot currect" });
      console.log('password isnot currect');


    }



    
export const searchquery = async(req, res) =>{
    let status = req.query.status;

    console.log(status)
 
    }
    