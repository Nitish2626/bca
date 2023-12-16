import { Pyq } from "../models/pyq.js";

export const php=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"PHP Programming"});
    res.send(pyqs);
};