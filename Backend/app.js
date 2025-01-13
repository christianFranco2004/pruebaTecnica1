import express from "express";
import dotenv from "dotenv";
import { connectionMongo } from "./src/config/dataBase.js";
import { usersRouter } from "./src/routers/user.routes.js";
import loginRouter from "./src/routers/login.routes.js";
import cors from "cors";

const app = express();
dotenv.config();
connectionMongo ();
app.use(cors());

app.use(express.json()); 
app.use('/usuarios', usersRouter);
app.use('/iniciarSesion', loginRouter);


const port = process.env.PORT;

app.listen (port, ()=> {
    console.log("se esta ejecutando el puerto " + port)
});  