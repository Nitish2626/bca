import express from "express";
import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const findEmail = await userModel.findOne({ email });
        if (findEmail) {
            return res.send("exists");
        }
        else {
            const hashPassword = await bcrypt.hash(password, 12);
            const user = await userModel.create({ username, email, password: hashPassword });
            const userId = await user._id.toString();

            try {
                const token=jwt.sign(userId,process.env.JWT_SECRET_KEY);
                res.cookie("Auth-token",token,{httpOnly:true});
            }
            catch (e) {
                console.log(e);
            }
            return res.send("created");
        }
    }
    catch (e) {
        return res.send("Internal Server Error");
    }
});

userRouter.post("/login", async (req, res) => {
    try {
        const check = await userModel.findOne({ email: await req.body.email });

        if (!check) {
            res.send("not exists");
        }
        else {
            const pw = await req.body.password;
            var comparePw = await bcrypt.compare(pw, await check.password)

            if (!comparePw) {
                res.send("Invalid");
            }
        }

        if (check && comparePw) {
            try{
                const token=jwt.sign(check._id.toString(),process.env.JWT_SECRET_KEY);
                res.cookie("Auth-token",token,{httpOnly:true});
                res.send("Success");
            }
            catch(e){
                console.log(e);
            }
        }
        else {
            res.send("Unsuccessful");
        }
    }
    catch (e) {
        res.send("Internal Server Error");
    }
});

export default userRouter;
