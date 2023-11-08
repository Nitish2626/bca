import mongoose from "mongoose";

const faq=mongoose.Schema({
    subject:{
        type:String
    },
    question:{
        type:String
    },
    answer:{
        type:String
    },
    year:{
        type:String
    }
});

const faqModel=mongoose.model("faq",faq);

export default faqModel;