const mongoose = require('mongoose');
const Role = require('../enums/Roles');

const roleSchema = new mongoose.Schema({
	role: { type: String, required: true, unique: true },
	permissions: { type: Array, required: true },
	enum: Object.values(Role),
});

const RoleModel = mongoose.model('Role', roleSchema, 'Roles');

module.exports = RoleModel;
