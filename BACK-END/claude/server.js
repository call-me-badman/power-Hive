import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import mongoose from "mongoose";

const app = express();
const server = http.createServer(app);

// ✅ Fix 1: was "i0" (letter i + zero), should be "io"
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/chatapp")
  .then(() => {
    console.log("Connected to MongoDB") // ✅ Fix 2: removed the stray comment that was breaking the chain
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err)
  });

const messageSchema = new mongoose.Schema({
  roomId: { type: String, required: true },
  sender: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model("message", messageSchema);

// ✅ Fix 3: moved the REST route OUTSIDE of io.on("connection")
// Routes should never be inside socket events
app.get("/messages/:roomId", async (req, res) => {
  try {
    const messages = await Message.find({ roomId: req.params.roomId }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room: ${room}`);
  });

  socket.on("chatMessage", async (data) => {
    try {
      const { roomId, sender, message } = data;
      const newMessage = new Message({ roomId, sender, message });
      await newMessage.save();
      io.to(roomId).emit("chatMessage", newMessage); // ✅ Fix 4: event name should match what frontend listens to
    } catch (err) {
      console.error("Error saving message", err);
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

// ✅ Fix 5: added server.listen — without this the server never starts
server.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});