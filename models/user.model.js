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
    required: [true, 'Please enter your email'],  // fixed: require → required
    lowercase: true,
    unique: true,
    minlength: 5,
    maxlength: 50,                                 // fixed: maxlenngth → maxlength
    match: [/^\S+@\S+\.\S+$/, 'Invalid email address']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],  // fixed typo in message
    minlength: 8
  },
  role: {
    type: String,
    required: [true, 'Please enter a role'],      // fixed: require → required
    enum: ['worker', 'admin']
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);  // conventionally capitalized
export default User;