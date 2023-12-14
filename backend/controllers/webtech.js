import { Pyq } from "../models/pyq";

export const webtech=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Web Technologies"});
    res.send(pyqs);
};