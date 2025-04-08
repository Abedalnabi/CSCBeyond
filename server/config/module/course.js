const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	salesCount: { type: Number, default: 0 },
	objectives: [{ type: String }], // Array of objectives for the course
	projects: [
		{
			title: { type: String },
			description: { type: String },
		},
	], // Array of projects related to the course
	content: [
		{
			title: { type: String, required: true }, // Title of each lesson/unit
			description: { type: String }, // Main text for the lesson/unit
			videoUrl: { type: String }, // Optional URL for the video
			resources: [{ type: String }], // Optional array of resource links
		},
	],
	requiredPlan: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Plan',
		required: true,
	},
	createdAt: { type: Date, default: Date.now },
});

const CoursesModel = mongoose.model('Course', coursesSchema, 'Courses');

module.exports = CoursesModel;
