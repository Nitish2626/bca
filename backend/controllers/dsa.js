import { Pyq } from "../models/pyq.js";

export const dsa=async (req,res)=>{
    const pyqs=await Pyq.find({subject:"Data Structures through C++"});
    res.send(pyqs);
};