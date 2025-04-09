const UserModel = require('../../../config/module/usesr');
const { hashPasswordFun, comparePassword } = require('../controllersHelper/users');
const CoursesModel = require('../../../config/module/course');
const { generateToken } = require('../../../middleware/auth');

const addUser = async (userData) => {
	const { email, password } = userData;

	const emailAfterLowercase = email.toLowerCase();

	const existingUser = await UserModel.findOne({ email: emailAfterLowercase });
	if (existingUser) {
		throw new Error('Email already exists');
	}

	const hashedPassword = await hashPasswordFun(password);
	const newUser = new UserModel({
		email: emailAfterLowercase,
		password: hashedPassword,
	});

	await newUser.save();
	return newUser;
};

const loginUser = async (email, password) => {
	const emailAfterLowercase = email.toLowerCase();
	const user = await UserModel.findOne({ email: emailAfterLowercase });
	if (!user) {
		throw new Error('Invalid email or password');
	}

	const isMatchPassword = await comparePassword(password, user.password);
	if (!isMatchPassword) {
		throw new Error('Invalid email or password');
	}

	const token = generateToken(user);
	return token;
};

const enrollCourse = async (userId, courseId) => {
	const course = await CoursesModel.findById(courseId);
	if (!course) {
		throw new Error('Course not found');
	}

	const user = await UserModel.findById(userId);
	if (!user) {
		throw new Error('User not found');
	}

	if (user.enrolledCourses.includes(courseId)) {
		throw new Error('User is already enrolled in this course');
	}

	user.enrolledCourses.push(courseId);
	await user.save();

	return user;
};

const getEnrolledCourses = async (userId) => {
	const user = await UserModel.findById(userId).populate('enrolledCourses').exec();
	if (!user) {
		throw new Error('User not found');
	}

	if (user.enrolledCourses.length === 0) {
		throw new Error('No courses found for the user');
	}

	return user.enrolledCourses;
};

module.exports = {
	addUser,
	loginUser,
	enrollCourse,
	getEnrolledCourses,
};
