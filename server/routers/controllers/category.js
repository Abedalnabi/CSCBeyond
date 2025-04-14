const CategoryModel = require('../../config/module/category');
const { verifyFields } = require('../../utils/verification');

module.exports = {
	addPlan: async (req, res) => {
		const { name, description } = req.body;

		try {
			// Check if all required fields are provided
			verifyFields({ name, description });

			const newCategory = new CategoryModel({
				name,
				description,
			});

			await newCategory.save();

			// Return the newly created plan
			return res.status(201).json({
				message: 'Category added successfully',
				category: {
					id: newCategory._id,
					name: newCategory.name,
					description: newCategory.description,
				},
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},
	getPlans: async (req, res) => {
		try {
			const categories = await CategoryModel.find();

			if (categories.length === 0) {
				return res.status(404).json({ message: 'No category found' });
			}

			return res.status(200).json({
				message: 'Categories fetched successfully',
				categories: categories,
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},
};
