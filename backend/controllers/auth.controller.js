import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {
    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save()
        res.status(201).json("user created successfully")
    } catch (error) {
        next(errorHandler(550, "Failed to create user"))
    }
 }
 