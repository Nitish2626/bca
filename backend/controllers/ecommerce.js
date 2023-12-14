import { Pyq } from "../models/pyq";

export const ecommerce=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Ecommerce Technology"});
    res.send(pyqs);
};