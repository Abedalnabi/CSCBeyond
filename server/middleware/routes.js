const userRouter = require('../routers/routes/users');
const categoryRouter = require('../routers/routes/category');
// const planRouter = require('../routers/routes/plans');

const routes = {
	register: async (app) => {
		app.use('/api', userRouter);
		app.use('/api', categoryRouter);
		// app.use('/api', planRouter);
	},
};

module.exports = routes;
