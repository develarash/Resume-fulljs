import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const ProjectsResume = db.define('ProjectsResume',{
    title: DataTypes.STRING,
    githubAdd: DataTypes.STRING,
    skills:DataTypes.JSON,
    myid:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    githubAddImg: DataTypes.STRING,

},{
    freezeTableName:true
});

export default ProjectsResume;

(async()=>{
    await db.sync({ alter: true });
})();