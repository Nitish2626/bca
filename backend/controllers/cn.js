import { Pyq } from "../models/pyq.js";

export const cn=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Computer Networks"});
    res.send(pyqs);
};