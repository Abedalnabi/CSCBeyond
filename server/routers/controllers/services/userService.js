// userService.js
const UserModel = require('../../../config/module/user');
const OrderModel = require('../../../config/module/order');
const { generateToken } = require('../../../middleware/auth');
const RolesModel = require('../../../config/module/role');
const { comparePassword, hashPasswordFun } = require('../../../routers/controllers/controllersHelper/users');
const { verifyEmail, verifyFields, verifyPasswordStrength } = require('../../../utils/verification');

// Add a new user
const addUser = async (userData) => {
	const { email, password, name } = userData;

	verifyFields(email, password);
	verifyEmail(email);
	verifyPasswordStrength(password);
	const emailAfterLowercase = email.toLowerCase();

	const existingUser = await UserModel.findOne({ email: emailAfterLowercase });
	if (existingUser) {
		throw new Error('Email already exists');
	}

	const hashedPassword = await hashPasswordFun(password);
	const newUser = new UserModel({
		email: emailAfterLowercase,
		password: hashedPassword,
		name: name,
	});

	await newUser.save();
	return newUser;
};

// Login user
const loginUser = async (email, password) => {
	const emailAfterLowercase = email.toLowerCase();

	verifyFields(email, password);
	const user = await UserModel.findOne({ email: emailAfterLowercase });
	if (!user) {
		throw new Error('Invalid email or password');
	}

	const isMatchPassword = await comparePassword(password, user.password);
	if (!isMatchPassword) {
		throw new Error('Invalid email or password');
	}
	const roleId = user.role.toString();

	const roleCollection = await RolesModel.findById(roleId);
	const roleName = roleCollection?.role;
	user.roleName = roleName;

	const token = generateToken(user);

	return token;
};

// Get orders for a specific user
const getUserOrders = async (userId) => {
	try {
		const orders = await OrderModel.find({ user: userId }).populate('products.product');
		return orders;
	} catch (err) {
		throw new Error('Error fetching orders');
	}
};

// Get all users
const getUsers = async () => {
	try {
		const users = await UserModel.find();
		return users;
	} catch (err) {
		throw new Error('Error fetching users');
	}
};

const updateUser = async (userId, updatedData) => {
	try {
		const user = await UserModel.findById(userId);

		if (!user) {
			throw new Error('User not found');
		}

		if (updatedData.email) {
			user.email = updatedData.email.toLowerCase();
		}
		if (updatedData.password) {
			user.password = await hashPasswordFun(updatedData.password);
		}
		if (updatedData.role) {
			user.role = updatedData.role;
		}

		await user.save();
		return user;
	} catch (err) {
		throw new Error('Error updating user');
	}
};

// Delete user
const deleteUser = async (userId) => {
	try {
		const user = await UserModel.findById(userId);
		if (!user) {
			throw new Error('User not found');
		}

		await OrderModel.deleteMany({ user: userId });

		await user.remove();
		return { message: 'User deleted successfully' };
	} catch (err) {
		throw new Error('Error deleting user');
	}
};

module.exports = {
	addUser,
	loginUser,
	getUserOrders,
	getUsers,
	updateUser,
	deleteUser,
};
