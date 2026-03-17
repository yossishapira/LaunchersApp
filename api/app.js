import 'dotenv/config'
import express from 'express'
import launcherRouter from './routes/launcherRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import authRoutes from './routes/authRoutes.js'
import {connect} from "./db.js"
import { createUser } from './services/userServices.js'
import cors from "cors"
const app = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(cors())

app.use('/api',launcherRouter)
app.use('/api/auth',adminRoutes)
app.use('/api/auth',authRoutes)



connect()
.then(async()=>{
    await createUser({
        username:'yossi',
        password:'1234',
        email:'u@ppp',
        user_type:'admin'
    })
})
app.listen(PORT,()=>{
    console.log(`server listenig on http://localhost:${PORT}`);
    
})