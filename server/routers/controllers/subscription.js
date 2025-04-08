const SubscriptionModel = require('../../config/module/subscription');

module.exports = {
	getSubs: async (req, res) => {
		res.send('subscription');
		let a = await SubscriptionModel.find();
		console.log('a', a);
	},
};
