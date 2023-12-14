import { Pyq } from "../models/pyq";

export const php=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"PHP Programming"});
    res.send(pyqs);
};