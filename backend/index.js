import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
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
app.use(cookieParser())

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.use((err, req, res, next) => {
   const statusCode = res.statusCode || 500
   const message = err.message || 'Internal Server Error'
   res.status(statusCode).json({
   success: false,
   statusCode,
   message
   })
})

app.use('/v1/user', userRoutes)
app.use('/v1/auth', authRoutes)