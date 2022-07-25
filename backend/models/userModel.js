import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Users = db.define('UserResume',{
    username:{   type:DataTypes.STRING,
        allowNull: true,
        // references: {
        //     model: Users,
        //     key: 'email'
        //   }   
         } ,
    email:{
        type: DataTypes.STRING,

        allowNull: false,
        // unique: true,
        validate: {
          isEmail: {
            msg: "Must be a valid email address",
          }
        }} ,
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      } 
},{
    freezeTableName:true
});
export const createUser = async(req, res) =>{
  try {
      await Users.create(req.body);
      res.status(201).json({msg: "User Created"});
  } catch (error) {
      console.log(error.message);
  }
}
export default Users;

(async()=>{
    await db.sync();
})();