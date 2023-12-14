import { Pyq } from "../models/pyq";

export const aj=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Advance Java"});
    res.send(pyqs);
};