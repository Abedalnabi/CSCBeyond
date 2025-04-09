const express = require('express');
const coursesRouter = express.Router();
const { getCourseByID, addCourse, getAllCourses, updateCourseById } = require('../controllers/courses');

coursesRouter.get('/course/:id', getCourseByID);
coursesRouter.post('/course', addCourse);
coursesRouter.post('/course', addCourse);
coursesRouter.put('/course/:id', updateCourseById);

module.exports = coursesRouter;
