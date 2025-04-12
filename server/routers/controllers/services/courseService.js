const CoursesModel = require('../../../config/module/course');
const PlanModel = require('../../../config/module/plan');
const CoursesTypes = require('../../../config/enums/CoursesTypes');

// Function to get courses based on various filters (pagination, status, title)
const getCourses = async (filter = {}, page = 1, limit = 20) => {
	const courses = await CoursesModel.find(filter)
		.skip((page - 1) * limit) // Skip to the correct page
		.limit(limit); // Limit the number of courses per page
	return courses;
};

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
const getAllCourses = async (page, limit) => {
	return await getCourses({}, page, limit);
};

// Get course by ID
const getCourseByID = async (courseId) => {
	return await CoursesModel.findById(courseId);
};

// Get courses by status with pagination
const getCourseByStatus = async (status, page, limit) => {
	return await getCourses({ status }, page, limit);
};

// Get courses by title // OR for serch fetcher
const getCourseByName = async (title, page, limit) => {
	return await getCourses({ title: { $regex: title, $options: 'i' } }, page, limit);
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
