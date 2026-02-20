import User from "../models/user.model.js"


//users controll


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