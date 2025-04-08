const PlanModel = require('../../config/module/plan');
const { verifyFields } = require('../../utils/verification');

module.exports = {
	addPlan: async (req, res) => {
		//TODO: add plan just if admin token
		const { planName, price, description, features } = req.body;

		try {
			// Check if all required fields are provided
			verifyFields({ planName, price, description, features });

			const newPlan = new PlanModel({
				planName,
				price,
				description,
				features,
			});

			await newPlan.save();

			// Return the newly created plan
			return res.status(201).json({
				message: 'Plan created successfully',
				plan: {
					id: newPlan._id,
					planName: newPlan.planName,
					price: newPlan.price,
					description: newPlan.description,
					features: newPlan.features,
					createdAt: newPlan.createdAt,
				},
			});
		} catch (err) {
			return res.status(500).json({ message: 'Server error', error: err.message });
		}
	},
};
