const productService = require('./services/productService');

module.exports = {
	// Get all products with pagination
	getAllProducts: async (req, res) => {
		const { page = 1, limit = 10, ...filters } = req.query;

		const filter = {};

		Object.entries(filters).forEach(([key, value]) => {
			if (value) {
				if (key === 'isFeatured') {
					filter.isFeatured = value === 'true';
				} else if (key === 'minPrice') {
					filter.price = { $gte: value };
				} else if (key === 'maxPrice') {
					filter.price = { ...filter.price, $lte: value };
				} else if (key === 'category') {
					filter.category = value;
				} else if (key === 'search') {
					filter.name = { $regex: value, $options: 'i' };
				} else {
					filter[key] = value;
				}
			}
		});

		try {
			const products = await productService.getProducts(filter, page, limit);
			return res.status(200).json({
				message: 'Filtered products retrieved successfully',
				data: products,
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
		const { name, price, rated, brand, color, category, salesCount, isFeatured } = req.body;
		try {
			const newProduct = await productService.addProduct({
				name,
				price,
				rated,
				brand,
				color,
				category,
				salesCount,
				isFeatured,
			});

			return res.status(201).json({
				message: 'Product created successfully',
				product: newProduct,
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
