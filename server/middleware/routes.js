const userRouter = require('../routers/routes/users');
const categoryRouter = require('../routers/routes/category');
const productRouter = require('../routers/routes/product');
const orderRouter = require('../routers/routes/order');
const cartRouter = require('../routers/routes/cart');
const contactRouter = require('../routers/routes/contact');

const routes = {
	register: async (app) => {
		app.use('/api', userRouter);
		app.use('/api', categoryRouter);
		app.use('/api', productRouter);
		app.use('/api', orderRouter);
		app.use('/api', cartRouter);
		app.use('/api', contactRouter);
	},
};

module.exports = routes;
