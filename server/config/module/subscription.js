const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	plan: { type: String, enum: ['college', 'employee', 'complete'], required: true },
	status: { type: String, enum: ['active', 'expired'], default: 'active' },
	createdAt: { type: Date, default: Date.now },
});

const SubscriptionModel = mongoose.model('Subscription', subscriptionSchema, 'Subscriptions');

module.exports = SubscriptionModel;
