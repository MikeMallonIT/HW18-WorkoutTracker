const router = require("express").Router();
const Workout = require("../models/workout.js");

// POST route used if the app can not find an existing workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// PUT route used to update a user's workout if they have already started one
router.put("/api/workouts/:id", ({ params, body }, res) => {
  Workout.findOneAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET route used to return workout
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// GET route used to return all workouts
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
