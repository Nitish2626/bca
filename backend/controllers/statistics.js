import { Pyq } from "../models/pyq.js";

export const statistics=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Statistical Techniques"}).sort({year:1});
    res.send(pyqs);
};