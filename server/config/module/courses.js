const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	requiredPlan: { type: String, enum: ['college', 'employee', 'complete'], required: true },
	studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	createdAt: { type: Date, default: Date.now },
});

const CoursesModel = mongoose.model('Course', coursesSchema, 'Course');

module.exports = CoursesModel;
