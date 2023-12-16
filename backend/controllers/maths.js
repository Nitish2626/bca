import { Pyq } from "../models/pyq.js";

export const maths=async (req,res)=>{
    try{
        const pyqs=await Pyq.find({subject:"Maths"});
        res.status(200).send(pyqs);
    }
    catch(err){
        console.log("Maths PYQ Finding ERROR",err);
    }
};