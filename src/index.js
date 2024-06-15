import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";


 connectDB();
 then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running on port: ${process.env.PORT}`);
    })
 })
.catch((error) => {
    console.log("ERROR: MONGO db connection failed " , error);
})


// const app = express






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