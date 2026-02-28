import { Router } from "express";
import { authorize } from "../middleware/auth.middle.js";
import { getUsers,getUserById,createUser } from "../controller/admin.controller.js";
const adminRouter=Router()

adminRouter.get('/users',authorize,getUsers)
adminRouter.get("/user/:id",getUserById)
adminRouter.post('/newUser',createUser)

 export default adminRouter
