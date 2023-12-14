import { Pyq } from "../models/pyq";

export const pcs=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Personality and Career Skills"});
    res.send(pyqs);
};