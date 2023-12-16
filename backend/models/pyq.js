import mongoose from "mongoose";

const pyqSchema=mongoose.Schema({
    subject:{
        type:String
    },
    size:{
        type:Number
    },
    storage:{
        type:String
    },
    year:{
        type:Number
    },
    url:{
        type:String
    }
});

export const Pyq=mongoose.model("pyq",pyqSchema);