import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const JWT_SECRET=process.env.JWT_SECRET
const JWT_EXPIRES=process.env.JWT_EXPIRES

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      const error = new Error("User not found")
      error.statusCode = 404
      throw error
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      const error = new Error("Invalid password")
      error.statusCode = 401
      throw error
    }

    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES }
    )

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000
    })
if(user.role=="admin"){
 return res.status(200).send({
    success:true,
    message:"welcome admin",
    data:{token,user}
  })
}
  return  res.status(200).json({
      success: true,
      message: "now it time to work",
      data: { token, user }
    })

  } catch (error) {
    next(error)
  }
}