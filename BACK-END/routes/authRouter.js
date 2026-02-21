import { Router } from "express";
import { signIn } from "../BACK-END/controller/auth.controller.js";


const authRouter = Router()

authRouter.post('/sign-in', signIn)

export default authRouter