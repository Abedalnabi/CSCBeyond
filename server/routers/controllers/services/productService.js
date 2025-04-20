const ProductModel = require('../../../config/module/product');
const CategoryModel = require('../../../config/module/category');

const addProduct = async (productsData) => {
	for (let productData of productsData) {
		const { category } = productData;
		const categoryExists = await CategoryModel.findById(category);
		if (!categoryExists) {
			throw new Error('Category not found for product: ' + productData.name);
		}
	}

	const newProducts = await ProductModel.insertMany(productsData);

	return newProducts;
};

const getProducts = async (filter = {}, page = 1, limit = 20) => {
	const totalProducts = await ProductModel.countDocuments(filter);

	const products = await ProductModel.find(filter)
		.skip((page - 1) * limit)
		.limit(limit)
		.populate('category');

	products.totalProducts = totalProducts;

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

const getProductsByLatest = async (filter = {}, page = 1, limit = 6) => {
	const totalProducts = await ProductModel.countDocuments(filter);

	const products = await ProductModel.find(filter)
		.sort({ addedAt: -1 })
		.skip((page - 1) * limit)
		.limit(limit);
	products.totalProducts = totalProducts;

	return products;
};

module.exports = {
	addProduct,
	getProducts,
	getProductByID,
	updateProductById,
	getFeaturedProducts,
	getTopSellingProducts,
	getProductsByLatest,
};
