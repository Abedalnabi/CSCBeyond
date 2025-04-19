const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env/env');
const RolesEnums = require('../config/enums/Roles');
module.exports = {
	generateToken: (userInfo) => {
		const payload = {
			userId: userInfo._id,
			roleName: userInfo.roleName,
			roleId: userInfo.role,
			email: userInfo.email,
			isActive: userInfo.active,
		};
		const options = {
			expiresIn: '1d',
		};
		let token = jwt.sign(payload, JWT_SECRET, options);
		return token;
	},

	decodeToken: (req) => {
		let token;
		if (req.headers && req.headers.authorization) {
			token = req.headers.authorization;
		}

		if (!token) {
			throw new Error('A token is required for authentication');
		}
		token = token.replace('Bearer ', '');
		try {
			const decoded = jwt.verify(token, SECRET);
			return decoded;
		} catch (err) {
			throw new Error('Invalid Token');
		}
	},

	authenticateToken: (req, res, next) => {
		let token;
		if (req.headers && req.headers.authorization) {
			token = req.headers.authorization;
		}

		if (!token) {
			return res.status(403).send('Access denied: Token is required');
		}

		token = token.replace('Bearer ', '');
		try {
			const decoded = jwt.verify(token, JWT_SECRET);
			req.user = decoded;
			next();
		} catch (err) {
			return res.status(403).send('Invalid token');
		}
	},

	isAdmin: (req, res, next) => {
		if (req.user?.roleName !== RolesEnums.ADMIN) {
			return res.status(403).send('Permission denied: Admins only');
		}
		next();
	},
};
