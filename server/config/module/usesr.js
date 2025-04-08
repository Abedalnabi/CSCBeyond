const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: { type: String },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Role',
		//TODO: remove this default value and make it dynimac added in the code
		default: '67f54a004da2dfde60e97192',
	},
	plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', default: null },
	//TODO: add active field in the code if need to send an email to the user

	enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
	createdAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model('User', userSchema, 'Users');

module.exports = UserModel;
