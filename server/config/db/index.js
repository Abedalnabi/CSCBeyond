const { MONGO_URI, SERVER_PORT } = require('../env/env');

module.exports = {
	db: {
		uri: MONGO_URI,
	},
	app: {
		port: SERVER_PORT,
	},
};
