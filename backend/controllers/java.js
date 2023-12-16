import { Pyq } from "../models/pyq.js";

export const java=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Java Programming"});
    res.send(pyqs);
};