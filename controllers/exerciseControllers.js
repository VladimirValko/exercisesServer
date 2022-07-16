import ExerciseModel from "../models/exercise.js";
import FavoriteModel from '../models/favorite.js'

export const getAll = async (req, res) => {
  try {
    const exercises = await ExerciseModel.find(); //
    res.json(exercises); 
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить упражнения..",
    });
  }
};

export const getByMuscle = async (req, res) => {
  try {
    const muscle = await req.params.muscle;

    ExerciseModel.find({ target: muscle }, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log(docs);
        res.json(docs);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить упражнения..",
    });
  }
};

// работает медленно, может реализовать на фронте?
export const searchExercise = async (req, res) => {
  try {
    const search = req.params.search;

    const exercises = await ExerciseModel.find().then(res => res.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search))); //

        res.json(exercises); 
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить упражнения..",
    });
  }
};





export const addToFavorite = async (req, res) => {
  try {

    console.log(req, 'это реквест из addtofav')

    const doc = new FavoriteModel({
      bodyPart: req.body.bodyPart,
      equipment: req.body.equipment,
      name: req.body.name,
      gifUrl: req.body.gifUrl,
      target: req.body.target,
      user: req.userId,
    });

    const favoriteExercise = await doc.save();
    res.json(favoriteExercise);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось добавить упражнение",
    });
  }
};






// export const pushData = async () =>
//   ExerciseModel.insertMany(db)
//     .then(function () {
//       console.log("Data inserted");
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
