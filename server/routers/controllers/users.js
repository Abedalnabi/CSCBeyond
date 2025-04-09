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
	// TODO: seperate login in onother file
	loginUser: async (req, res) => {
		const { email, password } = req.body;

		// --- Verification
		// Verify required fields
		verifyFields({ email, password });

		// Verifying email format
		verifyEmail(email);

		const emailAfterLowercase = email.toLowerCase();

		try {
			const user = await UserModel.findOne({ email: emailAfterLowercase });
			if (!user) {
				return res.status(400).json({ message: 'Invalid email or password' });
			}

			const isMatchPassword = await comparePassword(password, user.password);

			if (!isMatchPassword) {
				return res.status(400).json({ message: 'Invalid email or password' });
			}

			// Create a JWT token
			const token = generateToken(user);
			return res.status(200).json({
				message: 'Login successful',
				token: token,
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	enrollCourse: async (req, res) => {
		const { userId, courseId } = req.body;

		try {
			const course = await CoursesModel.findById(courseId);
			if (!course) {
				return res.status(404).json({ message: 'Course not found' });
			}

			const user = await UserModel.findById(userId);
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}

			if (user.enrolledCourses.includes(courseId)) {
				return res.status(400).json({ message: 'User is already enrolled in this course' });
			}

			user.enrolledCourses.push(courseId);

			await user.save();

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

	getEnrolledUserCourses: async (req, res) => {
		const { userId } = req.params; // الحصول على userId من الـ URL params

		try {
			const user = await UserModel.findById(userId)
				.populate('enrolledCourses') // Populate the enrolledCourses field with course details
				.exec();

			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}

			if (user.enrolledCourses.length === 0) {
				return res.status(404).json({ message: 'No courses found for the user' });
			}

			return res.status(200).json({
				message: 'User courses retrieved successfully',
				userCourses: user.enrolledCourses,
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},
};
