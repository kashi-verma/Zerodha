import dotenv from "dotenv";
 import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";
 dotenv.config({path: "./env"});
 connectDB();


import express from "express";
// const app = express()


















// ;( async () => {
//     try{
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR: ", error);
//         throw error
//     })


// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port: ${process.env.PORT}`);
// })
// }catch(error){

      

//             console.log("ERROR: " , error)
//             throw err
        
// }
// // })()