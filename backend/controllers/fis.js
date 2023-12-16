import { Pyq } from "../models/pyq.js";

export const fis=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Financial and Investment Skills"});
    res.send(pyqs);
};