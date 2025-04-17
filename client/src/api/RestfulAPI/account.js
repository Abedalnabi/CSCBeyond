// src/api/cartAPI.js

import axios from '../axios';
import { getToken } from '../../components/shared/common/auth';

const getPrdersByUserIDEndpoint = '/api/user-orders';

// Function to get the user's cart
export async function getProductByUserId() {
	try {
		const token = getToken();

		const response = await axios.get(`${getPrdersByUserIDEndpoint}`, {
			headers: {
				Authorization: `Bearer ${token}`, // Add the token to the header
			},
		});

		return response.data;
	} catch (error) {
		console.error('Error getting orders:', error);
		throw error;
	}
}
