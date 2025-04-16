const express = require('express');
const cartRouter = express.Router();
const { addToCart, getCart, updateCart, removeProductFromCart, clearUserCart } = require('../controllers/cart');
const { authenticateToken } = require('../../middleware/auth');

cartRouter.post('/cart', authenticateToken, addToCart);
cartRouter.get('/cart', authenticateToken, getCart);
cartRouter.put('/cart', authenticateToken, updateCart);
cartRouter.delete('/cart/product/:productId', authenticateToken, removeProductFromCart);
cartRouter.delete('/cart', authenticateToken, clearUserCart);

module.exports = cartRouter;
