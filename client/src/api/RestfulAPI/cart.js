// src/api/cartAPI.js

import axios from '../axios';
import { getToken } from '../../components/shared/common/auth';

const addToCartEndpoint = '/api/cart';

// Function to add product to cart
export async function addToCart(productWithQuantity) {
	try {
		const token = getToken();

		const response = await axios.post(
			addToCartEndpoint,
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

// Function to get cart by userId
export async function getCart(userId) {
	try {
		// Get the token from localStorage
		const token = getToken();

		// Send GET request with token in Authorization header
		const response = await axios.get(`${addToCartEndpoint}/${userId}`, {
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
