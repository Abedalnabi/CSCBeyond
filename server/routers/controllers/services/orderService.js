const OrderModel = require('../../../config/module/order');
const ProductModel = require('../../../config/module/product');
const RoleModel = require('../../../config/module/role');
const UserModel = require('../../../config/module/user');
const admin = require('../../../firebaseAdmin');
// Add a new order
const addOrder = async (userId, products, shippingAddress, req) => {
	try {
		// Ensure the user exists
		const user = await UserModel.findById(userId);
		if (!user) {
			throw new Error('User not found');
		}

		// Create the new order
		const newOrder = new OrderModel({
			user: userId,
			products,
			shippingAddress,
			status: 'pending',
		});

		const message = {
			notification: {
				title: 'New order submitted , you can approve it',
				body: `${user.email}`,
			},
		};

		const roleID = await RoleModel.find({ role: 'admin' });
		const admins = await UserModel.find({ role: roleID });

		admins.forEach((adminUser) => {
			console.log('adminUser', adminUser);
			if (adminUser.fcmToken) {
				message.token = adminUser.fcmToken;
				admin.messaging().send(message);
			}
		});

		// Save the order
		await newOrder.save();

		// Update the sales count for products
		for (const item of products) {
			await ProductModel.findByIdAndUpdate(item.product, {
				$inc: { salesCount: item.quantity },
			});
		}

		return newOrder;
	} catch (err) {
		throw new Error(err.message || 'Server error');
	}
};

// Get all orders
const getOrders = async () => {
	try {
		const orders = await OrderModel.find().populate('user', 'name email').populate('products.product', 'name price').exec();

		if (orders.length === 0) {
			throw new Error('No orders found');
		}

		return orders;
	} catch (err) {
		throw new Error(err.message || 'Server error');
	}
};

// Update the status of an order
const updateOrderStatus = async (orderId, status) => {
	try {
		const order = await OrderModel.findById(orderId);
		if (!order) {
			throw new Error('Order not found');
		}
		// Update order status
		order.status = status;
		const user = await UserModel.findById(order.user);

		const message = {
			notification: {
				title: 'Your order is approved',
				body: `${order._id}`,
			},
			token: user.fcmToken,
		};
		await admin.messaging().send(message);

		await order.save();

		return order;
	} catch (err) {
		throw new Error(err.message || 'Server error');
	}
};

// Get order by ID
const getOrderByID = async (orderId) => {
	try {
		const order = await OrderModel.findById(orderId)
			.populate('user', 'name email')
			.populate('products.product', 'name price');

		if (!order) {
			throw new Error('Order not found');
		}

		return order;
	} catch (err) {
		throw new Error(err.message || 'Server error');
	}
};

const getOrdersByUserId = async (userId) => {
	try {
		const orders = await OrderModel.find({ user: userId })
			.populate('user', 'name email')
			.populate({
				path: 'products.product',
				select: 'name price',
			})
			.exec();

		if (orders.length === 0) {
			throw new Error('No orders found for this user');
		}

		return orders;
	} catch (err) {
		throw new Error(err.message || 'Server error');
	}
};

module.exports = {
	addOrder,
	getOrders,
	updateOrderStatus,
	getOrderByID,
	getOrdersByUserId,
};
