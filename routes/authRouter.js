import { Router } from "express";

const authRouter=Router()

authRouter.post('/sign-up',async (req,res)=>{})
authRouter.get('/sign-in',async(req,res)=>{res.send("signed in ")})

export default authRouter