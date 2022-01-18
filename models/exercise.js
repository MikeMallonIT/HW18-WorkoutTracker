const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    
    type: {
        type: String,
        trim: true,
        required: "Enter a type of workout"
    },

    name: {
        type: String,
        trim: true,
        required: "Enter the name of the workout"
    },

    duration: {
        type: Number,
        required: "How many minutes did you workout for?"
    },

    weight: {
        type: Number,
        required: "How heavy were the weights you used?"
    },

    reps: {
        type: Number,
        required: "How many reps did you complete?"
    },

    sets: {
        type: Number,
        required: "How many sets did you complete?"
    } 
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;