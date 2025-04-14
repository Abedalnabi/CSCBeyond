// orderRouter.js
const express = require('express');
const orderRouter = express.Router();
const { addOrder, getOrders, updateOrderStatus, getOrderByID } = require('../controllers/order');
const { authenticateToken, isAdmin } = require('../../middleware/auth');

orderRouter.get('/orders', authenticateToken, isAdmin, getOrders);
orderRouter.post('/order', authenticateToken, addOrder);
orderRouter.get('/order', authenticateToken, isAdmin, getOrderByID);
orderRouter.put('/order', authenticateToken, updateOrderStatus);

module.exports = orderRouter;
