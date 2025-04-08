const express = require('express');
const coursesRouter = express.Router();
const { getCourses } = require('../controllers/courses');

coursesRouter.get('/courses', getCourses);

module.exports = coursesRouter;
