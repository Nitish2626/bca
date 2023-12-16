import { Pyq } from "../models/pyq.js";

export const qa=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Quantitative Aptitude"});
    res.send(pyqs);
};