import { Pyq } from "../models/pyq";

export const create=async(req,res)=>{
    const newPyq=await Pyq.create(await req.body);
    res.send(newPyq);
};