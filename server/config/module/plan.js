const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
	planName: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String, required: true },
	features: [{ type: String }], // Array of features for the plan
	createdAt: { type: Date, default: Date.now },
});

const PlanModel = mongoose.model('Plan', planSchema, 'Plans');

module.exports = PlanModel;
