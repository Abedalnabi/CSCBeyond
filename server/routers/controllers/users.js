// userController.js
const userService = require('./services/userService');

module.exports = {
	// Add a new user
	addUser: async (req, res) => {
		const { email, password, name } = req.body;

		try {
			const newUser = await userService.addUser({ email, password, name });

			return res.status(201).json({
				message: 'User created successfully',
				user: {
					id: newUser._id,
					name: newUser.name,
					email: newUser.email,
					roleName: newUser.role,
				},
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	// Login user
	loginUser: async (req, res) => {
		const { email, password } = req.body;

		try {
			const token = await userService.loginUser(email, password);

			return res.status(200).json({
				message: 'Login successful',
				token: token,
			});
		} catch (err) {
			return res.status(400).json({ message: err.message });
		}
	},

	// Get orders of a specific user
	getUserOrders: async (req, res) => {
		const userId = req.params.userId;

		try {
			const orders = await userService.getUserOrders(userId);

			if (!orders || orders.length === 0) {
				return res.status(404).json({ message: 'No orders found for this user' });
			}

			return res.status(200).json({
				message: 'Orders retrieved successfully',
				orders,
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	// Get all users
	getUsers: async (req, res) => {
		try {
			const users = await userService.getUsers();

			if (users.length === 0) {
				return res.status(404).json({ message: 'No users found' });
			}

			return res.status(200).json({
				message: 'Users retrieved successfully',
				users,
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	// Update user information
	updateUser: async (req, res) => {
		const userId = req.params.userId;
		const { email, password } = req.body;

		try {
			const updatedUser = await userService.updateUser(userId, { email, password });

			if (!updatedUser) {
				return res.status(404).json({ message: 'User not found' });
			}

			return res.status(200).json({
				message: 'User updated successfully',
				user: updatedUser,
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	// Delete user
	deleteUser: async (req, res) => {
		const userId = req.params.userId;

		try {
			const deletedUser = await userService.deleteUser(userId);

			if (!deletedUser) {
				return res.status(404).json({ message: 'User not found' });
			}

			return res.status(200).json({
				message: 'User deleted successfully',
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},
};
