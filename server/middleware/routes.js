const userRouter = require('../routers/routes/users');
const categoryRouter = require('../routers/routes/category');
const productRouter = require('../routers/routes/product');
const orderRouter = require('../routers/routes/order');

const routes = {
	register: async (app) => {
		app.use('/api', userRouter);
		app.use('/api', categoryRouter);
		app.use('/api', productRouter);
		app.use('/api', orderRouter);
	},
};

module.exports = routes;
