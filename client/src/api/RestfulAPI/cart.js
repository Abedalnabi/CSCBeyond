// src/api/cartAPI.js

import axios from '../axios';
import { getToken } from '../../components/shared/common/auth';

const CartEndpoint = '/api/cart';
const checkOutEndPoint = '/api/order';

// Function to add product to cart
export async function addToCart(productWithQuantity) {
	try {
		const token = getToken();

		const response = await axios.post(
			CartEndpoint,
			{
				productId: productWithQuantity.productId,
				quantity: productWithQuantity.quantity,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		return response.data;
	} catch (error) {
		console.log('error', error);
		console.error('Error adding to cart:', error);
		throw error;
	}
}

// Function to update products in the cart
export async function updateCart(products) {
	try {
		const token = getToken();

		const response = await axios.put(
			`${CartEndpoint}`,
			{
				products, // Array of products with their productId and quantity
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		return response.data;
	} catch (error) {
		console.log('error', error);
		console.error('Error updating cart:', error);
		throw error;
	}
}

// Function to clear the user's cart
export async function clearUserCart() {
	try {
		const token = getToken();

		const response = await axios.delete(`${CartEndpoint}`, {
			headers: {
				Authorization: `Bearer ${token}`, // Add the token to the header
			},
		});

		return response.data;
	} catch (error) {
		console.error('Error clearing cart:', error);
		throw error;
	}
}

// Function to get the user's cart
export async function getCart() {
	try {
		const token = getToken();

		const response = await axios.get(`${CartEndpoint}`, {
			headers: {
				Authorization: `Bearer ${token}`, // Add the token to the header
			},
		});

		return response.data;
	} catch (error) {
		console.error('Error getting cart:', error);
		throw error;
	}
}

// Function to handle checkout
export async function checkout(cartData) {
	try {
		const token = getToken();

		const response = await axios.post(`${checkOutEndPoint}`, cartData, {
			headers: {
				Authorization: `Bearer ${token}`, // Add the token to the header
			},
		});

		return response.data;
	} catch (error) {
		console.error('Error during checkout:', error);
		throw error;
	}
}
