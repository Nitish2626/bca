import { Pyq } from "../models/pyq.js";

export const evs=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Environmental Studies"});
    res.send(pyqs);
};