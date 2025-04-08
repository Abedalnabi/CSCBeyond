const UserModel = require('../../config/module/usesr');

module.exports = {
	addUser: async (req, res) => {
		const { fullName, email, password, subscriptionPlan, subscriptionStatus } = req.body;
		const hashPassword = await hashPasswordFun(password);
		const emailAfterLowercase = email.toLowerCase();

		try {
			const [user, created] = await UserModel.findOrCreate({
				where: {
					email: email,
				},
				defaults: {
					fullName,
					email: emailAfterLowercase,
					password: hashPassword,
				},
			});
			if (!created) throw new Error('email  Already Exist');

			const newUserInfo = user.dataValues;

			/* The below function send a verify link to newUser's Email to active his account,
			and add token to tblEmailToken with related userID */
			await sendVerifyLink(email, newUserInfo);

			return newUserInfo;
		} catch (err) {
			throw new Error(err);
		}
	},
};
