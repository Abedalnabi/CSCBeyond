const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String },
});

categorySchema.index({ name: 1 });

const CategoryModel = mongoose.model('Category', categorySchema, 'Categories');

module.exports = CategoryModel;
