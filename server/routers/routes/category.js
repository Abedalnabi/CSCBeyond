const express = require('express');
const categoryRouter = express.Router();
const { addPlan, getPlans } = require('../controllers/category');
const { authenticateToken, isAdmin } = require('../../middleware/auth');

categoryRouter.get('/category', authenticateToken, isAdmin, getPlans);
categoryRouter.post('/category', authenticateToken, isAdmin, addPlan);

module.exports = categoryRouter;
