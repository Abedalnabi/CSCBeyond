const orderService = require('./services/orderService');

module.exports = {
	// Add a new order
	addOrder: async (req, res) => {
		const { products, shippingAddress } = req.body;

		try {
			const newOrder = await orderService.addOrder(req.user?.userId, products, shippingAddress);
			return res.status(201).json({ message: 'Order placed successfully', status: 'success', order: newOrder });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ message: err.message });
		}
	},

	// Get all orders
	getOrders: async (req, res) => {
		try {
			const orders = await orderService.getOrders();
			return res.status(200).json(orders);
		} catch (err) {
			console.error(err);
			return res.status(500).json({ message: err.message });
		}
	},

	// Update the status of an order
	updateOrderStatus: async (req, res) => {
		const { orderId, status } = req.body;

		try {
			const order = await orderService.updateOrderStatus(orderId, status);
			return res.status(200).json({ message: 'Order status updated successfully', order });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ message: err.message });
		}
	},

	// Get order by ID
	getOrderByID: async (req, res) => {
		const { id } = req.params;

		try {
			const order = await orderService.getOrderByID(id);
			return res.status(200).json(order);
		} catch (err) {
			console.error(err);
			return res.status(500).json({ message: err.message });
		}
	},

	getOrdersByUserId: async (req, res) => {
		try {
			const orders = await orderService.getOrdersByUserId(req.user?.userId);
			return res.status(200).json(orders);
		} catch (err) {
			console.error(err);
			return res.status(500).json({ message: err.message });
		}
	},
};
