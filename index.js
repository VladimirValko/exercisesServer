import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as ExeciseControllers from './controllers/exerciseControllers.js';
import * as UserControllers from './controllers/userControllers.js';
import { registerValidation, loginValidation } from './auth/authValidation.js';
import  handleValidationErrors  from './auth/handleValidationErrors.js';
import  checkAuth  from './auth/checkAuth.js';

// mongodb+srv://admin:2310714@cluster0.sg3mhrd.mongodb.net/?retryWrites=true&w=majority

const app = express();
// const PORT = 4444;

app.use(bodyParser.json());

app.listen(process.env.PORT || 4444, () => console.log("Server is alive"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB Alive"))
  .catch((err) => console.log("DB Failed", err));



// app.post("/exercises", ExeciseControllers.pushData); 
app.get("/exercises", ExeciseControllers.getAll); 
app.get("/exercises/:search", ExeciseControllers.searchExercise);
app.post("/favorite", checkAuth, ExeciseControllers.addToFavorite); 


app.post("/auth/register", registerValidation, handleValidationErrors, UserControllers.registrate);
app.post("/auth/login", loginValidation, handleValidationErrors, UserControllers.login);
app.get("/auth/me", checkAuth, UserControllers.checkMe);