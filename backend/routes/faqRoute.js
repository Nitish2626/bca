import express from "express";
import faqModel from "../models/faq.js";

const faqRouter=express.Router();

faqRouter.post("/",async (req,res)=>{
    const faq=await faqModel.create(await req.body);
    res.send(faq);
});

faqRouter.get("/english",async (req,res)=>{
    const question=await faqModel.find({subject:"english"});
    res.send(question);
});

faqRouter.get("/maths",async (req,res)=>{
    const question=await faqModel.find({subject:"maths"});
    res.send(question);
});

faqRouter.get("/psc",async (req,res)=>{
    const question=await faqModel.find({subject:"psc"});
    res.send(question);
});

faqRouter.get("/oops",async (req,res)=>{
    const question=await faqModel.find({subject:"oops"});
    res.send(question);
});

faqRouter.get("/statistics",async (req,res)=>{
    const question=await faqModel.find({subject:"statistics"});
    res.send(question);
});

faqRouter.get("/cn",async (req,res)=>{
    const question=await faqModel.find({subject:"cn"});
    res.send(question);
});

faqRouter.get("/dsa",async (req,res)=>{
    const question=await faqModel.find({subject:"dsa"});
    res.send(question);
});

faqRouter.get("/evs",async (req,res)=>{
    const question=await faqModel.find({subject:"evs"});
    res.send(question);
});

faqRouter.get("/python",async (req,res)=>{
    const question=await faqModel.find({subject:"python"});
    res.send(question);
});

faqRouter.get("/webtech",async (req,res)=>{
    const question=await faqModel.find({subject:"webtech"});
    res.send(question);
});

faqRouter.get("/os",async (req,res)=>{
    const question=await faqModel.find({subject:"os"});
    res.send(question);
});

faqRouter.get("/dbms",async (req,res)=>{
    const question=await faqModel.find({subject:"dbms"});
    res.send(question);
});

faqRouter.get("/se",async (req,res)=>{
    const question=await faqModel.find({subject:"se"});
    res.send(question);
});

faqRouter.get("/java",async (req,res)=>{
    const question=await faqModel.find({subject:"java"});
    res.send(question);
});

faqRouter.get("/fis",async (req,res)=>{
    const question=await faqModel.find({subject:"fis"});
    res.send(question);
});

faqRouter.get("/csa",async (req,res)=>{
    const question=await faqModel.find({subject:"csa"});
    res.send(question);
});

faqRouter.get("/ecommerce",async (req,res)=>{
    const question=await faqModel.find({subject:"ecommerce"});
    res.send(question);
});

faqRouter.get("/aj",async (req,res)=>{
    const question=await faqModel.find({subject:"aj"});
    res.send(question);
});

faqRouter.get("/qa",async (req,res)=>{
    const question=await faqModel.find({subject:"qa"});
    res.send(question);
});

faqRouter.get("/linux",async (req,res)=>{
    const question=await faqModel.find({subject:"linux"});
    res.send(question);
});

faqRouter.get("/android",async (req,res)=>{
    const question=await faqModel.find({subject:"android"});
    res.send(question);
});

faqRouter.get("/php",async (req,res)=>{
    const question=await faqModel.find({subject:"php"});
    res.send(question);
});

faqRouter.get("/pcs",async (req,res)=>{
    const question=await faqModel.find({subject:"pcs"});
    res.send(question);
});

export default faqRouter;
