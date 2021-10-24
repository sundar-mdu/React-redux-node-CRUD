import User from "../models/userModel.js"

export const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({ message:error.message})
    }
}

export const createUsers = async (req, res) => {
    const user = req.body
    const newUser = new User(user)
    try {
        await newUser.save(newUser)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}