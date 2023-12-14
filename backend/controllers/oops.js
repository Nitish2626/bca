import { Pyq } from "../models/pyq";

export const oops=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Oops and C++"});
    res.send(pyqs);
};