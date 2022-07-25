
import express from "express";
import cors from "cors";
import blogsroute from "./routes/blogsRoute.js";
import projectRoute from "./routes/projectRoute.js";
import UserRoute from "./routes/userRoute.js";
import session from 'express-session';
import bodyParser from "body-parser";
import dotEnv from "dotenv";

const app = express();
dotEnv.config({ path: "./config/config.env" });

app.use(cors());
app.use(bodyParser.json())
// *Session
app.use(session({
    secret:"secret",
    cookie:{maxAge:6000},
    resave:false,
    saveUninitialized:false,
    
}))
app.use("/api",blogsroute);
app.use("/api",projectRoute);
app.use("/api",UserRoute);
const PORT = process.env.PORT;

app.listen(PORT, ()=> console.log('Server up and running...'));