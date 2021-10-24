import User from "../models/userModel.js"
import mongoose from 'mongoose'

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

export const updateUser = async (req, res) => {    
    try {
        const id = req.params.id
        const user = req.body
        if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).json({message: 'User Id Not Exist'})

        const updatedUser = await User.findByIdAndUpdate(id, {...user, _id:id}, {new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const deleteUser = async (req, res) => {    
    try {
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).json({message: 'User Id Not Exist'})

        await User.findByIdAndRemove(id)
        res.status(200).json({message: 'User deleted successfully!'})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}