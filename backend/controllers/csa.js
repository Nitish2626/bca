import { Pyq } from "../models/pyq.js";

export const csa=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Computer System Architecture"});
    res.send(pyqs);
};