const bcrypt = require('bcrypt');

module.exports = {
	hashPasswordFun: async (password) => {
		const hashPassword = await bcrypt.hash(password, 10);
		return hashPassword;
	},
	comparePassword: async (password, hashPassword) => {
		const validPassword = await bcrypt.compare(password, hashPassword);
		return validPassword;
	},

	// sendVerifyLink: async (email, newUserInfo) => {},
};
