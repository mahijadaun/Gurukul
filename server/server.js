import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from 'http2'
import connectDB from './configs/mongodb.js'
import { clearWebHooks } from './controllers/webhooks.js'
// import educatorRouter from './routes/educatorRoutes.js'
// import { clerkMiddleware } from '@clerk/express'
// import connectCloudinary from './configs/cloudinary.js'

const app = express()

connectDB()
// await connectCloudinary()

app.use(cors())
// app.use(clerkMiddleware())

app.get('/', (req,res)=> res.send("API Working"))
app.post('/clerk', express.json(), clearWebHooks)
// app.use('/api/educator', express.json(), educatorRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})