import express from 'express';

//app.get("/products", (req,res) => );
const app = express();
 app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
 });