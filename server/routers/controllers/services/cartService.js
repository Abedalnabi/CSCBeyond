const CartModel = require('../../../config/module/cart');
const ProductModel = require('../../../config/module/product');

module.exports = {
	addToCart: async (userId, { productId, quantity }) => {
		if (!productId || !quantity) {
			return { status: 400, data: { message: 'ProductId and quantity are required' } };
		}

		const product = await ProductModel.findById(productId);
		if (!product) {
			return { status: 404, data: { message: 'Product not found' } };
		}

		let cart = await CartModel.findOne({ user: userId });

		if (!cart) {
			cart = new CartModel({
				user: userId,
				products: [{ product: productId, quantity }],
			});
		} else {
			const productIndex = cart.products.findIndex((item) => item.product.toString() === productId.toString());
			if (productIndex === -1) {
				cart.products.push({ product: productId, quantity });
			} else {
				cart.products[productIndex].quantity += quantity;
			}
		}

		await cart.save();
		return {
			status: 201,
			data: {
				message: 'Product added to cart',
				cart: {
					userId: cart.user,
					products: cart.products,
				},
			},
		};
	},

	getCart: async (userId) => {
		const cart = await CartModel.findOne({ user: userId }).populate('products.product');

		if (!cart) {
			return { status: 404, data: { message: 'Cart is empty or not found' } };
		}

		return {
			status: 200,
			data: {
				message: 'Cart fetched successfully',
				cart,
			},
		};
	},

	updateCart: async (userId, { productId, quantity }) => {
		if (!productId || !quantity) {
			return { status: 400, data: { message: 'ProductId and quantity are required' } };
		}

		const cart = await CartModel.findOne({ user: userId });

		if (!cart) {
			return { status: 404, data: { message: 'Cart not found' } };
		}

		const productIndex = cart.products.findIndex((item) => item.product.toString() === productId.toString());

		if (productIndex === -1) {
			return { status: 404, data: { message: 'Product not found in cart' } };
		}

		cart.products[productIndex].quantity = quantity;
		await cart.save();

		return {
			status: 200,
			data: {
				message: 'Cart updated successfully',
				cart,
			},
		};
	},

	removeProductFromCart: async (userId, productId) => {
		const cart = await CartModel.findOne({ user: userId });

		if (!cart) {
			return { status: 404, data: { message: 'Cart not found' } };
		}

		const productIndex = cart.products.findIndex((item) => item.product.toString() === productId.toString());

		if (productIndex === -1) {
			return { status: 404, data: { message: 'Product not found in cart' } };
		}

		cart.products.splice(productIndex, 1);
		await cart.save();

		return {
			status: 200,
			data: {
				message: 'Product removed from cart',
				cart,
			},
		};
	},

	clearUserCart: async (userId) => {
		const cart = await CartModel.findOne({ user: userId });

		if (!cart) {
			return { status: 404, data: { message: 'Cart not found' } };
		}

		cart.products = [];
		await cart.save();

		return {
			status: 200,
			data: {
				message: 'Cart cleared successfully',
				cart,
			},
		};
	},
};
