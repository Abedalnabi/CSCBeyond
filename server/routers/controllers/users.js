const UserModel = require('../../config/module/usesr');
const { hashPasswordFun, comparePassword } = require('./controllersHelper/users');
const { generateToken } = require('../../middleware/auth');
const { verifyFields, verifyEmail, verifyPasswordStrength } = require('../../utils/verification');

module.exports = {
	addUser: async (req, res) => {
		const { email, password } = req.body;

		// --- Verification
		// Verification: Check all required fields
		verifyFields({ email, password });

		// Verifying the email format
		verifyEmail(email);

		// Verifying the strength of the password
		verifyPasswordStrength(password);

		const emailAfterLowercase = email.toLowerCase();

		try {
			const existingUser = await UserModel.findOne({ email: emailAfterLowercase });
			if (existingUser) {
				return res.status(400).json({ message: 'Email already exists' });
			}

			const hashedPassword = await hashPasswordFun(password);
			const newUser = new UserModel({
				email: emailAfterLowercase,
				password: hashedPassword,
			});

			await newUser.save();

			/* The below function send a verify link to newUser's Email to active his account, */
			// await sendVerifyLink(email, newUser);

			return res.status(201).json({
				message: 'User created successfully',
				user: {
					id: newUser._id,
					name: newUser.name,
					email: newUser.email,
					plan: newUser.plan,
				},
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},
	loginUser: async (req, res) => {
		console.log('login');
		const { email, password } = req.body;

		// --- Verification
		// Verify required fields
		verifyFields({ email, password });

		// Verifying email format
		verifyEmail(email);

		const emailAfterLowercase = email.toLowerCase();

		try {
			// Check if user exists
			const user = await UserModel.findOne({ email: emailAfterLowercase });
			if (!user) {
				return res.status(400).json({ message: 'Invalid email or password' });
			}
			console.log('user', user);

			// Compare password with the stored hashed password
			const isMatchPassword = await comparePassword(password, user.password);

			if (!isMatchPassword) {
				return res.status(400).json({ message: 'Invalid email or password' });
			}

			// Create a JWT token
			const token = generateToken(user);
			// Send the token in the response
			return res.status(200).json({
				message: 'Login successful',
				token: token, // The token is sent to the user
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},
};
