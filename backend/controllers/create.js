import { Pyq } from "../models/pyq.js";

export const addPyq = async (req, res) => {
    try {
        const newPyq = await Pyq.create(await req.body);
        res.status(200).send(newPyq);
    }
    catch(err){
        console.log("PYQ Creating ERROR",err);
    }   
};