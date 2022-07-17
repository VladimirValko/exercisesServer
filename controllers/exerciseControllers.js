import ExerciseModel from "../models/exercise.js";
import FavoriteModel from '../models/favorite.js'


export const getOne = async (req, res) => {
  try {
    const exercise = await ExerciseModel.findOne(
        { _id: req.params.id });
    console.log(req.params, 'упражнение')
    res.json(exercise)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить упражнения..",
    });
  }
};

export const getFavoriteOne = async (req, res) => {
  try {
    const exercise = await FavoriteModel.findOne(
        { _id: req.params.id });
    console.log(req.params, 'упражнение')
    res.json(exercise)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить упражнения..",
    });
  }
};

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

export const getFavorite = async (req, res) => {
  try {
    const user_ID = await req.userId;
    console.log(user_ID);

    const exercises = await FavoriteModel.find({user: user_ID}); //
    console.log(req.params, 'это парамсы')
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


export const searchExercise = async (req, res) => {
  try {
    const search = req.params.search;
    console.log(req.params);
    const exercises = await ExerciseModel.find();
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

    const doc = new FavoriteModel({
      bodyPart: req.body.bodyPart,
      equipment: req.body.equipment,
      name: req.body.name,
      gifUrl: req.body.gifUrl,
      target: req.body.target,
      user: req.userId,
    });

    const favoriteExercise = await doc.save();
     console.log(favoriteExercise)
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
