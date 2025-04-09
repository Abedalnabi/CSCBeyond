const mongoose = require('mongoose');
const RoleModel = require('./role');
const RolesEnums = require('../enums/Roles');

const userSchema = new mongoose.Schema({
	name: { type: String },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Role',
	},
	plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', default: null },
	enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
	active: { type: Boolean, default: true },
	createdAt: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
	if (!this.role) {
		const userRole = await RoleModel.findOne({ role: RolesEnums.USER });
		this.role = userRole ? userRole._id : null;
	}
	next();
});

const UserModel = mongoose.model('User', userSchema, 'Users');

module.exports = UserModel;
