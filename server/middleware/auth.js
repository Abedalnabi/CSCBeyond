const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env/env');

module.exports = {
	generateToken: (userInfo) => {
		const payload = {
			userName: userInfo.name,
			role: userInfo?.role,
			email: userInfo.email,
			plan: userInfo?.plan,
		};
		const options = {
			expiresIn: '1d',
		};

		let token = jwt.sign(payload, JWT_SECRET, options);
		return token;
	},

	decodeToken: (req) => {
		let token;
		if (req.body.headers) {
			token = req.body.headers.authorization;
		}

		if (!token) {
			throw new Error('A token is required for authentication');
		}
		token = token.replace('Bearer ', '');
		try {
			const decoded = jwt.verify(token, JWT_SECRET);

			return decoded;
		} catch (err) {
			throw new Error('Invalid Token');
		}
	},
};
