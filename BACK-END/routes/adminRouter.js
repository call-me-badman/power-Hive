import { Router } from "express";
import { authorize } from "../BACK-END/middleware/auth.middle.js";
import { getUsers, getUserById, createUser } from "../BACK-END/controller/admin.controller.js";
const adminRouter = Router()

adminRouter.get('/users', authorize, getUsers)
adminRouter.get("/user/:id", getUserById)
adminRouter.post('/newUser', createUser)

export default adminRouter
