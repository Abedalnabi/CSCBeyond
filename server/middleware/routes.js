const userRouter = require('../routers/routes/users');
const coursesRouter = require('../routers/routes/courses');
const planRouter = require('../routers/routes/plans');

const routes = {
	register: async (app) => {
		app.use('/api', userRouter);
		app.use('/api', coursesRouter);
		app.use('/api', planRouter);
	},
};

module.exports = routes;
