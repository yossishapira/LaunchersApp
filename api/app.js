import 'dotenv/config'
import express from 'express'
import launcherRouter from './routes/launcherRoutes.js'
import {connect} from "./db.js"
const app = express()
const PORT = process.env.PORT

app.use(express.json());

app.use('/api',launcherRouter)


connect()

app.listen(PORT,()=>{
    console.log(`server listenig on http://localhost:${PORT}`);
    
})