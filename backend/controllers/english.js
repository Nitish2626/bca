import { Pyq } from "../models/pyq.js"

export const english = async (req, res) => {
    try {
        const pyqs = await Pyq.find({ subject: "English Communication" });
        res.status(200).send(pyqs);
    }
    catch(err){
        console.log("English PYQ Finding ERROR",err);
    }
};