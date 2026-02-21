import express from "express"
import { initSocket } from "./controller/chat.controller.js"
import { config } from "dotenv"
import { Server } from "socket.io"
config()
import { connectTodb } from "./database/database.js"
import authRouter from "./routes/authRouter.js"
import { authorize } from "./middleware/auth.middle.js"
import adminRouter from "./routes/adminRouter.js"

import { createServer } from "http"
const app = express()

const httpServer = createServer(app)
export const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/admin', authorize, adminRouter)
app.get('/', async (req, res) => {
    return res.send('welcome to my power hive app');
})

initSocket()
httpServer.listen(process.env.PORT, async () => {
    console.log(`server is running on port ${process.env.PORT}`)
    await connectTodb()
})
