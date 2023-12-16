import { Pyq } from "../models/pyq.js";

export const rdbms=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"RDBMS"});
    res.send(pyqs);
};