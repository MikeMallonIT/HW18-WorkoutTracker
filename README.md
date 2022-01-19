# Homework 18 - No SQL: Fitness Tracker - Michael Mallon

## What I did

This week I used Express.js to build a fitness tracking application. Unlike other homework assignemnts, this application does not use MySQL. Instead, we were instructed to use NoSQL service: MongoDB. For this assignment, I built a new model (`/models/wokrout.js`) to define all of the perameters used in a workout. The cool part was how I was able to create variables that were not used for all situations. For instance, I defined `distance` for cardio workouts. I can use the same model for weight lifting exercises, that variable will simply not be used.

<br>

### Motivation:
This application opened my eyes to less-structured data. I really like the idea of there being less "rules" when designing a database. MongoDB is part of the MERN stack which I hope to gain more experience with in this class.

<br>

### Problems I solved:
    * Built Model for workout
    * Built routes to serve data from MongoDB
    * Built routes to serve front-end HTML data
    * Used Mongodb.com to configure a public-facing database
    * Deployed to Heroku for public website hosting and linked to Mongo

<br />
<br />

## Installation:
Download all associated files in this repository. Install Mongo then use the `npm install` function. After that, CD to the directory the root application folder is installed in and use the `npm start` function.

## Public Hosting:
If you would like to view this application without installing it locally, see visit the Heroku deployed link: [FitnessTracker-Deployed](https://mm-hw18-fitness-tracker.herokuapp.com/)

## Credits
- SMU
- Trilogy Education Services
- [Mozilla](https://developer.mozilla.org)
- [W3 Schools](https://www.w3schools.com/)
- [W3.org](https://www.w3.org/)
- [Stack Overflow](https://stackoverflow.com)
- [MySQLTutorial](https://www.mysqltutorial.org/mysql-update-data.aspx)
- [DYClassroom](https://dyclassroom.com/mysql/mysql-select-from-table)
- [FreeCodeCamp](https://forum.freecodecamp.org/t/console-log-array-prints-a-result-but-return-array-is-undefined/192382)
- [Dev.to](https://dev.to/afifsohaili/dealing-with-promises-in-an-array-with-async-await-5d7g)
- [Mongo](https://docs.mongodb.com/manual)
