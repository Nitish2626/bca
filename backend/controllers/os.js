import { Pyq } from "../models/pyq";

export const os=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Operating System"});
    res.send(pyqs);
};