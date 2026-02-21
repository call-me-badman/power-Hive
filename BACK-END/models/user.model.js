import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],  
    lowercase: true,
    unique: true,
    minlength: 5,
    maxlength: 50,                          
    match: [/^\S+@\S+\.\S+$/, 'Invalid email address']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'], 
    minlength: 8
  },
  role: {
    type: String,
    required: [true, 'Please enter a role'],    
    enum: ['worker', 'admin']
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);  
export default User;