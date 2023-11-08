import express from "express";
import {Book} from "../models/book.js";

const bookRouter=express.Router();

bookRouter.get("/sem1",async(req,res)=>{
    try{
        const books=await Book.find({"semester":"sem 1"});
        return res.status(200).json({
            books:books
        });
    }
    catch(err){
        console.log(err);
    }
});

bookRouter.get("/sem2",async(req,res)=>{
    try{
        const books=await Book.find({"semester":"sem 2"});
        return res.status(200).json({
            books:books
        });
    }
    catch(err){
        console.log(err);
    }
});

bookRouter.get("/sem3",async(req,res)=>{
    try{
        const books=await Book.find({"semester":"sem 3"});
        return res.status(200).json({
            books:books
        });
    }
    catch(err){
        console.log(err);
    }
});

bookRouter.get("/sem4",async(req,res)=>{
    try{
        const books=await Book.find({"semester":"sem 4"});
        return res.status(200).json({
            books:books
        });
    }
    catch(err){
        console.log(err);
    }
});

bookRouter.get("/sem5",async(req,res)=>{
    try{
        const books=await Book.find({"semester":"sem 5"});
        return res.status(200).json({
            books:books
        });
    }
    catch(err){
        console.log(err);
    }
});

bookRouter.get("/sem6",async(req,res)=>{
    try{
        const books=await Book.find({"semester":"sem 6"});
        return res.status(200).json({
            books:books
        });
    }
    catch(err){
        console.log(err);
    }
});

export default bookRouter;