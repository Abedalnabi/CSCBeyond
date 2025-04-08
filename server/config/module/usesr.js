const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	subscriptionPlan: { type: String, enum: ['college', 'employee', 'complete'], default: 'free' },
	subscriptionStatus: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
	enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
	createdAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model('User', userSchema, 'Users');

module.exports = UserModel;
