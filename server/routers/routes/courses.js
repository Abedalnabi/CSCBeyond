const express = require('express');
const coursesRouter = express.Router();
const { authenticateToken, isAdmin } = require('../../middleware/auth');
const {
	getCourseByID,
	addCourse,
	getAllCourses,
	updateCourseById,
	getCourseByStatus,
	getCourseByName,
} = require('../controllers/courses');

coursesRouter.get('/course/:id', getCourseByID);
coursesRouter.get('/courses', getAllCourses);
coursesRouter.get('/courses/search', getCourseByName);
coursesRouter.get('/courses/status', getCourseByStatus);

// Apply authenticateToken to all routes below this line

coursesRouter.post('/course', authenticateToken, isAdmin, addCourse);
coursesRouter.put('/course/:id', authenticateToken, isAdmin, updateCourseById);

module.exports = coursesRouter;
