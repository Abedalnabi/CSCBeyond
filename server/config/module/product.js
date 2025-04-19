const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	rated: { type: String, default: 0 },
	imageUrl: { type: String, required: true },
	brand: { type: String, required: true },
	color: { type: String, required: true },
	category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
	salesCount: { type: Number, default: 0 },
	isFeatured: { type: Boolean, default: false },
	addedAt: { type: Date, default: Date.now },
});

const ProductModel = mongoose.model('Product', productSchema, 'Products');

module.exports = ProductModel;
