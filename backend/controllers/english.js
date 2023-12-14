import { Pyq } from "../models/pyq"

export const english=async(req,res)=>{
    const pyqs=await Pyq.find({subject:"English Communication"});
    res.send(pyqs);
};