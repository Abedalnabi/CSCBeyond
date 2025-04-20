const productService = require('./services/productService');
const CategoryModel = require('../../config/module/category');

module.exports = {
	// Get all products with pagination
	getAllProducts: async (req, res) => {
		const { page = 1, limit = 10, ...filters } = req.query;

		const filter = {};

		if (filters.category) {
			try {
				const categories = filters.category.split(',');

				const categoryIds = await CategoryModel.find({ name: { $in: categories } }).select('_id');

				if (categoryIds.length > 0) {
					filter.category = { $in: categoryIds.map((category) => category._id) };
				} else {
					return res.status(400).json({ message: 'Categories not found' });
				}
			} catch (error) {
				return res.status(500).json({ message: 'Error retrieving categories', error });
			}
		}

		Object.entries(filters).forEach(([key, value]) => {
			if (value) {
				if (key === 'isFeatured') {
					filter.isFeatured = value === 'true';
				} else if (key === 'minPrice') {
					filter.price = { $gte: value };
				} else if (key === 'maxPrice') {
					filter.price = { ...filter.price, $lte: value };
				} else if (key === 'search') {
					filter.name = { $regex: value, $options: 'i' };
				} else if (key === 'brand' || key === 'color' || key === 'rated') {
					filter[key] = { $in: value.split(',') };
				} else {
					if (filter[key] != 'category') {
						// filter[key] = value;
					}
				}
			}
		});
		console.log('filter', filter);

		try {
			const products = await productService.getProducts(filter, page, limit);
			return res.status(200).json({
				message: 'Filtered products retrieved successfully',
				data: products,
				totalProducts: products?.totalProducts,
			});
		} catch (error) {
			return res.status(500).json({ message: 'Server error', error });
		}
	},

	// Get a product by its ID
	getProductByID: async (req, res) => {
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({ message: 'Product ID is required' });
		}

		try {
			const product = await productService.getProductByID(id);
			if (!product) {
				return res.status(404).json({ message: 'Product not found' });
			}
			return res.status(200).json(product);
		} catch (error) {
			return res.status(500).json({ message: 'Internal server error', error });
		}
	},

	// Add a new product
	addProduct: async (req, res) => {
		const products = req.body;
		try {
			const newProducts = await productService.addProduct(products);

			return res.status(201).json({
				message: 'Products created successfully',
				products: newProducts,
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	// Update a product by its ID
	updateProductById: async (req, res) => {
		const { id } = req.params;
		const updatedData = req.body;

		try {
			const product = await productService.updateProductById(id, updatedData);
			return res.status(200).json({
				message: 'Product updated successfully',
				product,
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},

	// Get featured products with pagination
	getFeaturedProducts: async (req, res) => {
		const { page = 1, limit = 10 } = req.query;
		try {
			const products = await productService.getFeaturedProducts(page, limit);
			return res.status(200).json({
				message: 'Featured products retrieved successfully',
				data: products,
				totalProducts: products?.totalProducts,
			});
		} catch (error) {
			return res.status(500).json({ message: 'Server error', error });
		}
	},

	getProductsByLatest: async (req, res) => {
		let { page = 1, limit = 6 } = req.query;

		page = parseInt(page, 10);
		limit = parseInt(limit, 10);

		try {
			const products = await productService.getProductsByLatest({}, page, limit);
			return res.status(200).json({
				message: 'Latest products retrieved successfully',
				data: products,
			});
		} catch (error) {
			return res.status(500).json({ message: 'Server error', error });
		}
	},

	// Get top-selling products with pagination
	getTopSellingProducts: async (req, res) => {
		const { page = 1, limit = 10 } = req.query;
		try {
			const products = await productService.getTopSellingProducts(page, limit);

			console.log('productService', productService);
			return res.status(200).json({
				message: 'Top-selling products retrieved successfully',
				data: products,
			});
		} catch (error) {
			console.error('Error in getTopSellingProducts:', error);
			return res.status(500).json({ message: 'Server error', error });
		}
	},
};
