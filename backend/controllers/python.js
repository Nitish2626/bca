import { Pyq } from "../models/pyq.js";

export const python=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Python Programming"});
    res.send(pyqs);
};