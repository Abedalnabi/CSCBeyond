const express = require('express');
const planRouter = express.Router();
const { addPlan } = require('../controllers/plans');

planRouter.post('/plan', addPlan);

module.exports = planRouter;
