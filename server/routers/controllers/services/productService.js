const ProductModel = require('../../../config/module/product');
const CategoryModel = require('../../../config/module/category');

const addProduct = async (productData) => {
	const { name, price, rated, brand, color, category, salesCount, isFeatured, imageUrl } = productData;

	const categoryExists = await CategoryModel.findById(category);
	if (!categoryExists) {
		throw new Error('Category not found');
	}

	const newProduct = new ProductModel({
		name,
		price,
		rated,
		brand,
		color,
		imageUrl,
		category,
		salesCount,
		isFeatured,
	});

	await newProduct.save();
	return newProduct;
};

const getProducts = async (filter = {}, page = 1, limit = 20) => {
	const products = await ProductModel.find(filter)
		.skip((page - 1) * limit)
		.limit(limit)
		.populate('category');
	return products;
};

const getProductByID = async (productId) => {
	return await ProductModel.findById(productId).populate('category');
};

const updateProductById = async (productId, updatedData) => {
	const product = await ProductModel.findById(productId);
	if (!product) {
		throw new Error('Product not found');
	}

	Object.assign(product, updatedData);
	await product.save();

	return product;
};

const getFeaturedProducts = async (page = 1, limit = 20) => {
	return await getProducts({ isFeatured: true }, page, limit);
};

const getTopSellingProducts = async (page = 1, limit = 20) => {
	try {
		const products = await getProducts({}, page, limit);

		return products.sort((a, b) => b.salesCount - a.salesCount);
	} catch (error) {
		console.error('Error in getTopSellingProducts:', error);
		throw new Error('Error fetching top-selling products');
	}
};

module.exports = {
	addProduct,
	getProducts,
	getProductByID,
	updateProductById,
	getFeaturedProducts,
	getTopSellingProducts,
};
