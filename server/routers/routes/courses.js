const express = require('express');
const coursesRouter = express.Router();
const { getCourseByID } = require('../controllers/courses');

coursesRouter.get('/course/:id', getCourseByID);

module.exports = coursesRouter;
