const CoursesModel = require('../../../config/module/course');
const PlanModel = require('../../../config/module/plan');
const CoursesTypes = require('../../../config/enums/CoursesTypes');

// Add a course
const addCourse = async (courseData) => {
	const { title, description, price, requiredPlans, content, objectives, projects } = courseData;

	const plans = await PlanModel.find({ _id: { $in: requiredPlans } });
	if (plans.length !== requiredPlans.length) {
		throw new Error('One or more plans are not found');
	}

	const newCourse = new CoursesModel({
		title,
		description,
		price,
		requiredPlans,
		content,
		objectives,
		projects,
	});

	await newCourse.save();

	return newCourse;
};

// Get all courses
const getAllCourses = async () => {
	return await CoursesModel.find();
};

// Get course by ID
const getCourseByID = async (courseId) => {
	return await CoursesModel.findById(courseId);
};

// Get course by status
const getCourseByStatus = async (status) => {
	return await CoursesModel.find({ status: status });
};

// Get courses by title
const getCourseByName = async (title) => {
	return await CoursesModel.find({ title: { $regex: title, $options: 'i' } });
};

// Update course
const updateCourseById = async (courseId, updatedData) => {
	const course = await CoursesModel.findById(courseId);
	if (!course) {
		throw new Error('Course not found');
	}

	if (updatedData.status && !Object.values(CoursesTypes).includes(updatedData.status)) {
		throw new Error('Invalid status value. Valid values are "opend", "commingSoon", "archived".');
	}

	Object.assign(course, updatedData);
	await course.save();

	return course;
};

module.exports = {
	addCourse,
	getAllCourses,
	getCourseByID,
	getCourseByStatus,
	getCourseByName,
	updateCourseById,
};
