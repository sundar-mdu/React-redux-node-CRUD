import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number
})

const User = mongoose.model('User', userSchema) 

export default User;