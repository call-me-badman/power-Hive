import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

//users controller for admin

export const createUser = async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      res.status(400).send({
        success:false,
        message:"the user already exists"
      })  
      const error = new Error("User already exists")
      throw error
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role
    })

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000
    })

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    })

  } catch (error) {
    next(error)
  }
}
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({ role: { $ne: "admin" } }).select("-password")

    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found in database"
      })
    }

    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    })

  } catch (error) {
    next(error)
  }
}

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password")

    if (!user) {
      const error = new Error("User not found")
      error.statusCode = 404
      throw error
    }

    res.status(200).json({
      success: true,
      data: user
    })

  } catch (error) {
    next(error)
  }
}

export const deletUser= async (req,res,next)=>{

    const existingUser= await findOneByIdAndDelete(req.params.id)

}