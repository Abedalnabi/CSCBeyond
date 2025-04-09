const courseService = require('./services/courseService');

module.exports = {
	// Get course by ID
	getCourseByID: async (req, res) => {
		const { id } = req.params;

		if (!id) {
			return res.status(400).json({ message: 'Course ID is required' });
		}

		try {
			const course = await courseService.getCourseByID(id);
			if (!course) {
				return res.status(404).json({ message: 'Course not found' });
			}
			return res.status(200).json(course);
		} catch (error) {
			return res.status(500).json({ message: 'Internal server error', error });
		}
	},

	// Get all courses
	getAllCourses: async (req, res) => {
		const { page = 1, limit = 10 } = req.query;
		try {
			const courses = await courseService.getAllCourses(page, limit);
			return res.status(200).json({
				message: 'All courses retrieved successfully',
				data: courses,
			});
		} catch (error) {
			return res.status(500).json({ message: 'Internal server error', error });
		}
	},

	// Get courses by status
	getCourseByStatus: async (req, res) => {
		const { status } = req.query;
		const { page = 1, limit = 10 } = req.query; // Pagination params
		try {
			if (!status) {
				return res.status(400).json({ message: 'Please provide a valid status' });
			}

			const courses = await courseService.getCourseByStatus(status, page, limit);
			if (courses.length === 0) {
				return res.status(404).json({ message: `No courses found with status: ${status}` });
			}
			return res.status(200).json({
				message: `Courses with status '${status}' retrieved successfully`,
				data: courses,
			});
		} catch (error) {
			return res.status(500).json({ message: 'Server error', error: error.message });
		}
	},

	// Update course
	updateCourseById: async (req, res) => {
		const { id } = req.params;
		const updatedData = req.body;

		try {
			const course = await courseService.updateCourseById(id, updatedData);
			return res.status(200).json({
				message: 'Course updated successfully',
				course,
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	// Get course by name with pagination
	getCourseByName: async (req, res) => {
		const { title } = req.query;
		const { page = 1, limit = 10 } = req.query; // Pagination params
		try {
			if (!title) {
				return res.status(400).json({ message: 'Please provide a course name (title)' });
			}

			const courses = await courseService.getCourseByName(title, page, limit);
			if (courses.length === 0) {
				return res.status(404).json({ message: `No courses found with title: ${title}` });
			}
			return res.status(200).json({
				message: `Courses with title '${title}' retrieved successfully`,
				data: courses,
			});
		} catch (error) {
			return res.status(500).json({ message: 'Server error', error: error.message });
		}
	},

	// Add a course
	addCourse: async (req, res) => {
		const { title, description, price, requiredPlans, content, objectives, projects } = req.body;

		try {
			const newCourse = await courseService.addCourse({
				title,
				description,
				price,
				requiredPlans,
				content,
				objectives,
				projects,
			});

			return res.status(201).json({
				message: 'Course created successfully',
				course: newCourse,
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},
};
