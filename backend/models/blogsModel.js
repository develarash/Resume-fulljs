import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Blogs = db.define('BlogResume',{
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      } 
},{
    freezeTableName:true
});

export default Blogs;

(async()=>{
    await db.sync();
})();