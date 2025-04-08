const CoursesModel = require('../../config/module/course');
const PlanModel = require('../../config/module/plan');

module.exports = {
	getCourseByID: async (req, res) => {
		const { id } = req.params;

		if (!id) {
			return res.status(400).json({ message: 'Course ID is required' });
		}

		try {
			const course = await CoursesModel.findById(id);

			if (!course) {
				return res.status(404).json({ message: 'Course not found' });
			}

			return res.status(200).json(course);
		} catch (error) {
			return res.status(500).json({ message: 'Internal server error', error });
		}
	},

	getAllCourses: async (req, res) => {
		try {
			const courses = await CoursesModel.find();
			return res.status(200).json(courses);
		} catch (error) {
			return res.status(500).json({ message: 'Internal server error', error });
		}
	},

	getCourseByStatus: async (req, res) => {
		// TODO: add paginations
		const { status } = req.query;

		try {
			if (!status) {
				return res.status(400).json({ message: 'Please provide a valid status' });
			}

			const courses = await CoursesModel.find({ status: status });

			if (courses.length === 0) {
				return res.status(404).json({ message: `No courses found with status: ${status}` });
			}

			return res.status(200).json({
				message: `Courses with status '${status}' retrieved successfully`,
				courses,
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	addCourse: async (req, res) => {
		const { title, description, price, requiredPlan, content, objectives, projects } = req.body;

		try {
			const plan = await PlanModel.findById(requiredPlan);
			if (!plan) {
				return res.status(400).json({ message: 'Plan not found' });
			}

			const newCourse = new CoursesModel({
				title,
				description,
				price,
				requiredPlan,
				content,
				objectives,
				projects,
			});

			await newCourse.save();

			return res.status(201).json({
				message: 'Course created successfully',
				course: {
					id: newCourse._id,
					title: newCourse.title,
					description: newCourse.description,
					price: newCourse.price,
					requiredPlan: newCourse.requiredPlan,
					content: newCourse.content,
					objectives: newCourse.objectives,
					projects: newCourse.projects,
					createdAt: newCourse.createdAt,
				},
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	getCoursesByPlanId: async (req, res) => {
		const { planId } = req.query;

		try {
			if (!planId) {
				return res.status(400).json({ message: 'Please provide planId' });
			}

			const courses = await CoursesModel.find({ requiredPlan: planId });

			if (courses.length === 0) {
				return res.status(404).json({ message: 'No courses found for the given planId' });
			}

			return res.status(200).json({
				message: 'Courses retrieved successfully',
				courses,
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},
};
