const express = require('express');
const planRouter = express.Router();
const { addPlan, getPlans } = require('../controllers/plans');

planRouter.get('/plan', getPlans);
planRouter.post('/plan', addPlan);

module.exports = planRouter;
