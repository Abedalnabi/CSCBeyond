const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	subject: { type: String, required: true },
	message: { type: String, required: true },
	type: { type: String, enum: ['question', 'contact'], required: true },
});

const contactModel = mongoose.model('Contact', contactUsSchema, 'Contacts');
module.exports = contactModel;
