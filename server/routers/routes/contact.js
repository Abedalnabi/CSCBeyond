const express = require('express');
const contactRouter = express.Router();
const { getContactAndAsks, addToContactOrAsk } = require('../controllers/cart');
const { authenticateToken } = require('../../middleware/auth');

contactRouter.post('/contact', authenticateToken, addToContactOrAsk);
contactRouter.get('/contact', authenticateToken, getContactAndAsks);

module.exports = contactRouter;
