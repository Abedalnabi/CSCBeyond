// src/api/cartAPI.js

import axios from '../axios';
import { getToken } from '../../components/shared/common/auth';

const getOrdersEndpoint = '/api/orders';
const updateOrdersEndpoint = '/api/order';

// Function to get the user's cart
export async function getOrders() {
	try {
		const token = getToken();

		const response = await axios.get(`${getOrdersEndpoint}`, {
			headers: {
				Authorization: `Bearer ${token}`, // Add the token to the header
			},
		});

		return response;
	} catch (error) {
		console.error('Error getting orders:', error);
		throw error;
	}
}

export async function updateOrder(data) {
	try {
		const token = getToken();

		const response = await axios.put(`${updateOrdersEndpoint}`, data, {
			headers: {
				Authorization: `Bearer ${token}`, // Add the token to the header
			},
		});

		return response;
	} catch (error) {
		console.error('Error getting orders:', error);
		throw error;
	}
}
