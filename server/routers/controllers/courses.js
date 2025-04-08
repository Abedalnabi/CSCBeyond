const CoursesModel = require('../../config/module/courses');

module.exports = {
	getCourses: async (req, res) => {
		res.send('Courses');
		let a = await CoursesModel.find();
		console.log('a', a);
	},
};
