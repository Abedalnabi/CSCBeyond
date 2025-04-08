const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
	role: { type: String, required: true, unique: true },
	permissions: { type: Array, required: true },
});

const RoleModel = mongoose.model('Role', roleSchema, 'Roles');

module.exports = RoleModel;
