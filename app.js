import express from "express"
import { config } from "dotenv"
config()
import { connectTodb } from "./database/database.js"
import authRouter from "./routes/authRouter.js"
import { authorize } from "./middleware/auth.middle.js"
import adminRouter from "./routes/adminRouter.js"
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/admin',authorize,adminRouter)
app.get('/',async (req,res)=>{
return res.send('welcome to my power hive app');
})
const PORT= process.env.PORT

app.listen(PORT, async()=>{
    console.log(`listening on ${PORT}`)
await connectTodb();
})