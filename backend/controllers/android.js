import { Pyq } from "../models/pyq";

export const android=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Android Programming"});
    res.send(pyqs);
};