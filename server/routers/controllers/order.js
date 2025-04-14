const OrderModel = require('../../config/module/order');
const ProductModel = require('../../config/module/product');

module.exports = {
	addOrder: async (req, res) => {
		const { userId, products, shippingAddress } = req.body;

		try {
			// Ensure the user exists
			const user = await UserModel.findById(userId);
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}

			// Create the new order
			const newOrder = new OrderModel({
				user: userId,
				products,
				shippingAddress,
				status: 'pending',
			});

			// Save the order
			await newOrder.save();

			// Update the sales count for products
			for (const item of products) {
				await ProductModel.findByIdAndUpdate(item.product, {
					$inc: { salesCount: item.quantity },
				});
			}

			return res.status(201).json({ message: 'Order placed successfully', order: newOrder });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	getOrders: async (req, res) => {
		try {
			const orders = await OrderModel.find()
				.populate('user', 'name email')
				.populate('products.product', 'name price')
				.exec();

			if (orders.length === 0) {
				return res.status(404).json({ message: 'No orders found' });
			}

			return res.status(200).json(orders);
		} catch (err) {
			console.error(err);
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	updateOrderStatus: async (req, res) => {
		const { orderId, status } = req.body;

		try {
			const order = await OrderModel.findById(orderId);
			if (!order) {
				return res.status(404).json({ message: 'Order not found' });
			}

			// Update order status
			order.status = status;
			await order.save();

			return res.status(200).json({ message: 'Order status updated successfully', order });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	getOrderByID: async (req, res) => {
		const { id } = req.params; // Get the order ID from the URL parameter

		try {
			// Find the order by ID
			const order = await OrderModel.findById(id)
				.populate('user', 'name email') // Optionally populate user details
				.populate('products.product', 'name price'); // Optionally populate product details

			// If the order is not found
			if (!order) {
				return res.status(404).json({ message: 'Order not found' });
			}

			// Return the found order
			return res.status(200).json(order);
		} catch (err) {
			console.error(err);
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},
};
