// src/api/cartAPI.js

import axios from '../axios';
import { getToken } from '../../components/shared/common/auth';

const CartEndpoint = '/api/cart';

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
