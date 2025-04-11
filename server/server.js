import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from 'http2'
import connectDB from './configs/mongodb.js'
import { clearWebHooks } from './controllers/webhooks.js'

const app = express()

connectDB()

app.use(cors())

app.get('/', (req,res)=> res.send("API Working"))
app.post('/clerk', express.json(), clearWebHooks)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})