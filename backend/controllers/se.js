import { Pyq } from "../models/pyq";

export const se=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Software Engineering"});
    res.send(pyqs);
};