import { Pyq } from "../models/pyq";

export const maths=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Maths"});
    res.send(pyqs);
};