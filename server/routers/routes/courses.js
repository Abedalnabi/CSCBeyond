const express = require('express');
const coursesRouter = express.Router();
const { getCourseByID, addCourse, getAllCourses } = require('../controllers/courses');

coursesRouter.get('/course:id', getCourseByID);
coursesRouter.post('/course', addCourse);

module.exports = coursesRouter;
