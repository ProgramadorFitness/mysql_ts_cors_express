import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import connectionDB from './connection/connection'
//--IMPORT ROUTES
import ClientRoutes from './routes/client.routes';


const app = express()

//--config
app.set("port", process.env.PORT || 3001)

//--middlleswares
app.use(morgan("dev"))
app.use(cors())
app.use(urlencoded({extended: false}))
app.use(json())

//--conexion
connectionDB()

//--routes
app.get("/api", (req, res) => {
    res.json("client active")
})

//list
app.use("/api/clients", ClientRoutes)

export default app;