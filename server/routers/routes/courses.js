const express = require('express');
const coursesRouter = express.Router();
const {
	getCourseByID,
	addCourse,
	getAllCourses,
	updateCourseById,
	getCourseByStatus,
	getCourseByName,
} = require('../controllers/courses');

coursesRouter.get('/course/:id', getCourseByID);
coursesRouter.post('/course', addCourse);
coursesRouter.put('/course/:id', updateCourseById);
coursesRouter.get('/courses', getAllCourses);
coursesRouter.get('/courses/search', getCourseByName);
coursesRouter.get('/courses/status', getCourseByStatus);

module.exports = coursesRouter;
