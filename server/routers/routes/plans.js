const express = require('express');
const planRouter = express.Router();
const { addPlan, getPlans } = require('../controllers/plans');
const { authenticateToken, isAdmin } = require('../../middleware/auth');

planRouter.get('/plan', authenticateToken, isAdmin, getPlans);
planRouter.post('/plan', authenticateToken, isAdmin, addPlan);

module.exports = planRouter;
