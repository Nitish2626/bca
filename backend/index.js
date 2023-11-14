import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import bookRouter from "./routes/bookRoute.js";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import faqRouter from "./routes/faqRoute.js";
import cookieParser from "cookie-parser";

const port=process.env.PORT || 2000;
const app=express();

app.use(cors());
app.use(express.json());

app.use(bookRouter);
app.use(userRouter);
app.use(faqRouter);

mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log("Database Connected");
    app.listen(port,()=>{
        console.log("Server Started");
    });
})
.catch((err)=>{
    console.log(err);
    
});
