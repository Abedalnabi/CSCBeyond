require('dotenv').config();

module.exports = {
	SERVER_PORT: process.env.SERVER_PORT,
	MONGO_URI: process.env.MONGO_URI,
};
