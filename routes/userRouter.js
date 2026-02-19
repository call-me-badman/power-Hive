import router from "calculator-api-express/routes/add";
import { Router } from "express";
import { authorize } from "../middleware/auth.middle";

const userRouter=router()

userRouter.get('/users',authorize,getUsers)
 
