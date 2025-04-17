const CartService = require('./services/cartService');

module.exports = {
	addToCart: async (req, res) => {
		try {
			const response = await CartService.addToCart(req.user?.userId, req.body);
			return res.status(response.status).json(response.data);
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	getCart: async (req, res) => {
		try {
			const response = await CartService.getCart(req.user?.userId);
			return res.status(response.status).json(response.data);
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	updateCart: async (req, res) => {
		try {
			const response = await CartService.updateCart(req.user?.userId, req.body.products);
			return res.status(response.status).json(response.data);
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	removeProductFromCart: async (req, res) => {
		try {
			const response = await CartService.removeProductFromCart(req.user?.userId, req.params.productId);
			return res.status(response.status).json(response.data);
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	clearUserCart: async (req, res) => {
		try {
			const response = await CartService.clearUserCart(req.user?.userId);
			return res.status(response.status).json(response.data);
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},
};
