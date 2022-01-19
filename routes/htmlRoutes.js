const router = require("express").Router();
const path = require('path');


// Serve up front end data for homepage
router.get("/", (req, res) => {

  res.sendFile(path.join(__dirname, "../public/index.html"));

});


// Serve up front end data for exercise page
router.get("/exercise", (req, res) => {

    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  
});

// Serve up front end data for stats page
router.get("/stats", (req, res) => {

    res.sendFile(path.join(__dirname, "../public/stats.html"));
  
});

module.exports = router;
