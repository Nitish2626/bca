import { Pyq } from "../models/pyq";

export const statistics=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Statistics"});
    res.send(pyqs);
};