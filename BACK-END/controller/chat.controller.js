import Message from "../models/message.model.js";
import { io } from "../app.js";
import mongoose from "mongoose";
export const initSocket = () => {
    io.on("connection", (socket) => {
        console.log("a user connected", socket.id);

        socket.on("chatMessage", async (data) => {
            try {
                const { sender, message, receiver } = data;

                const newMessage = new Message({ sender, message,receiver });
                await newMessage.save();

            
                const populated = await newMessage.populate("sender", "username email");

                io.emit("newMessage", populated);
            } catch (error) {
                console.error("Error saving message:", error);
            }
        });

        socket.on("disconnect", () => {
            console.log("a user disconnected", socket.id);
        });
    });
};