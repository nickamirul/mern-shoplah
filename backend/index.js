import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log(err)
    })

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.use('/v1/user', userRoutes)
app.use('/v1/auth', authRoutes)