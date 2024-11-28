import express, { response } from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
dotenv.config();
const app = express();
app.get("/", (req,res) => {
    res.send("Server Started");
} );
console.log(process.env.MONGO_URI);
 app.listen(3000, () => {
    connectDB();
    console.log("Server started at http://localhost:3000");
 });

 