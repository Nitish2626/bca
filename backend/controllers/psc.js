import { Pyq } from "../models/pyq";

export const psc=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Problem Solving using Computers"});
    res.send(pyqs);
};