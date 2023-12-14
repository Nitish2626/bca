import mongoose from "mongoose";

const pyq=mongoose.Schema({
    subject:{
        type:String
    },
    size:{
        type:Number
    },
    storage:{
        type:String
    },
    url:{
        type:String
    }
});

export const Pyq=mongoose.model("pyq",pyq);