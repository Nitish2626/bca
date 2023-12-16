import { Pyq } from "../models/pyq.js";

export const linux=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Linux Administration"});
    res.send(pyqs);
};