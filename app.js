import express from "express"
import { config } from "dotenv"
import { connectTodb } from "./database/database.js"
import authRouter from "./routes/authRouter.js"
config()
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/v1/auth',authRouter)
// app.use('/api/v1/users',userRouter)
app.get('/',async (req,res)=>{
res.send('welcome to my power hive app');
})
const PORT= process.env.PORT

app.listen(PORT, async()=>{
    console.log(`listening on ${PORT}`)
await connectTodb();
})