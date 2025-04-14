const express = require('express');
const productsRouter = express.Router();
const { authenticateToken, isAdmin } = require('../../middleware/auth');
const {
	getProductByID,
	getAllProducts,
	getFeaturedProducts,
	getTopSellingProducts,
	addProduct,
	updateProductById,
} = require('../controllers/product');

productsRouter.get('/product/:id', getProductByID);
productsRouter.get('/products', getAllProducts);

productsRouter.get('/products/featured', getFeaturedProducts);
productsRouter.get('/products/top-selling', getTopSellingProducts);

// Apply authenticateToken to all routes below this line

productsRouter.post('/product', authenticateToken, isAdmin, addProduct);
productsRouter.put('/product/:id', authenticateToken, isAdmin, updateProductById);

module.exports = productsRouter;
