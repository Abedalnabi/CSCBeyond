require('dotenv').config();

module.exports = {
	SERVER_PORT: process.env.SERVER_PORT,
	MONGO_URI: process.env.MONGO_URI,
	JWT_SECRET: process.env.JWT_SECRET,
};
