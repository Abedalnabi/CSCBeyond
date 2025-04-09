const mongoose = require('mongoose');
const CoursesTypes = require('../../config/enums/CoursesTypes');

const coursesSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	salesCount: { type: Number, default: 0 },
	objectives: [{ type: String }], // Array of objectives for the course
	status: {
		type: String,
		enum: Object.values(CoursesTypes),
		default: CoursesTypes.OPENED,
	},
	projects: [
		{
			title: { type: String },
			description: { type: String },
		},
	],
	content: [
		{
			title: { type: String, required: true },
			videoUrl: { type: String },
			resources: [{ type: String }],
		},
	],
	requiredPlans: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Plan',
			required: true,
		},
	],
	createdAt: { type: Date, default: Date.now },
});

const CoursesModel = mongoose.model('Course', coursesSchema, 'Courses');

module.exports = CoursesModel;
