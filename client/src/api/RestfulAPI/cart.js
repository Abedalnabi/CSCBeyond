import axios from '../axios';

// Endpoints
const addToCardEndPoint = '/api/cart';

export async function getCart(userID) {}

export async function addToCard(userId, productWithQuntity) {
	try {
		const response = await axios.post(`${addToCardEndPoint}`);

		return {
			data: response.data,
			status: response.status,
			message: response.data?.message,
		};
	} catch (error) {
		return {
			data: null,
			status: error.response?.status,
			message: error.response?.data?.error,
		};
	}
}
