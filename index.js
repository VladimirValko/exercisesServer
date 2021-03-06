import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as ExeciseControllers from './controllers/exerciseControllers.js';
import * as UserControllers from './controllers/userControllers.js';
import * as WorkoutControllers from './controllers/workoutsControllers.js';
import * as CompletedControllers from './controllers/completedContropllers.js';

import { registerValidation, loginValidation } from './auth/authValidation.js';
import  handleValidationErrors  from './auth/handleValidationErrors.js';
import  checkAuth  from './auth/checkAuth.js';

// mongodb+srv://admin:2310714@cluster0.sg3mhrd.mongodb.net/?retryWrites=true&w=majority
// https://exercises-server.herokuapp.com/
const app = express();
// const PORT = 4444;

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect('mongodb+srv://admin:2310714@cluster0.sg3mhrd.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log("DB Alive"))
  .catch((err) => console.log("DB Failed", err));



app.get("/", ExeciseControllers.getTop);
app.get("/exercises", ExeciseControllers.getAll);
app.get("/favorite", checkAuth, ExeciseControllers.getFavorite);
app.get("/exercises/exercise/:id", ExeciseControllers.getOne);
app.get("/exercises/top/:id", ExeciseControllers.getOneOfTop);
app.get("/exercises/favorite/:id", ExeciseControllers.getFavoriteOne);
app.get("/exercises/:search", ExeciseControllers.searchExercise);
app.post("/exercises/exercise/:id", checkAuth, ExeciseControllers.addToFavorite);
app.delete("/exercises/exercise/:id", checkAuth, ExeciseControllers.deleteFavorite);



app.post("/workouts", WorkoutControllers.createWorkout);
app.patch("/workouts", WorkoutControllers.updateWorkout);
app.get("/workouts", checkAuth, WorkoutControllers.getWorkoutPlan);
app.post("/progress", checkAuth, CompletedControllers.createCompletedWorkout);
app.get("/progress", checkAuth, CompletedControllers.getCompletedWorkouts);



app.post("/auth/register", registerValidation, handleValidationErrors, UserControllers.registrate);
app.post("/auth/login", loginValidation, handleValidationErrors, UserControllers.login);
app.get("/auth/me", checkAuth, UserControllers.checkMe);


// app.post("/data", ExeciseControllers.pushData);

app.listen(process.env.PORT || 4444, () => console.log("Server is alive"));
