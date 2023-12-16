import { Pyq } from "../models/pyq.js";

export const webtech=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Web Technologies"});
    res.send(pyqs);
};