const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	products: [
		{
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product',
				required: true,
			},
			quantity: {
				type: Number,
				required: true,
				default: 1,
			},
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const CartModel = mongoose.model('Cart', cartSchema, 'Carts');

module.exports = CartModel;
