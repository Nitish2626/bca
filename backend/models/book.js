import mongoose from "mongoose";

const book=mongoose.Schema({
    subject:{
        type:String
    },
    size:{
        type:Number
    },
    semester:{
        type:String
    },
    storage:{
        type:String
    },
    url:{
        type:String
    }
});

export const Book=mongoose.model("book",book);