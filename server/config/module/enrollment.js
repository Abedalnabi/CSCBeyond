const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
	enrolledAt: { type: Date, default: Date.now },
});

const enrollmentModel = mongoose.model('Enrollment', enrollmentSchema, 'Enrollments');
module.exports = enrollmentModel;
