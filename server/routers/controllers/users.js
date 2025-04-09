const userService = require('./services/userService'); // استيراد خدمة المستخدم

module.exports = {
	// Add a new user
	addUser: async (req, res) => {
		const { email, password } = req.body;

		try {
			const newUser = await userService.addUser({ email, password });

			return res.status(201).json({
				message: 'User created successfully',
				user: {
					id: newUser._id,
					name: newUser.name,
					email: newUser.email,
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

	// Enroll a user in a course
	enrollCourse: async (req, res) => {
		const { userId, courseId } = req.body;

		try {
			const user = await userService.enrollCourse(userId, courseId);

			return res.status(200).json({
				message: 'User enrolled in course successfully',
				user: {
					id: user._id,
					name: user.name,
					enrolledCourses: user.enrolledCourses,
				},
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	// Get courses enrolled by user
	getEnrolledUserCourses: async (req, res) => {
		const { userId } = req.params;

		try {
			const userCourses = await userService.getEnrolledCourses(userId);

			return res.status(200).json({
				message: 'User courses retrieved successfully',
				userCourses,
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},
};
