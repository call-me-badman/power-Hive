import { Router } from "express";

const userRouter=Router()
 
userRouter.get("/users",async (req,res)=>{
    res.send("get all users")
})
export default userRouter