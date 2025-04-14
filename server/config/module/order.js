const mongoose = require('mongoose');
const ProductModel = require('./product');

const orderSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	products: [
		{
			product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
			quantity: { type: Number, required: true },
		},
	],
	shippingAddress: {
		addressLine1: { type: String, required: true },
		addressLine2: { type: String },
		city: { type: String, required: true },
		postalCode: { type: String, required: true },
		country: { type: String, required: true },
		phoneNumber: { type: String, required: true },
	},
	status: { type: String, enum: ['pending', 'delivered', 'rejected'], default: 'pending' },
	createdAt: { type: Date, default: Date.now },
});

orderSchema.post('save', async function () {
	for (const item of this.products) {
		await ProductModel.findByIdAndUpdate(item.product, {
			$inc: { salesCount: item.quantity },
		});
	}
});
const OrderModel = mongoose.model('Order', orderSchema, 'Orders');

module.exports = OrderModel;
