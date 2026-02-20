import { Router } from "express";
import { authorize } from "../middleware/auth.middle.js";
import { getUsers } from "../controller/admin.controller.js";
const adminRouter=Router()

adminRouter.get('/users',authorize,getUsers)

 export default adminRouter
