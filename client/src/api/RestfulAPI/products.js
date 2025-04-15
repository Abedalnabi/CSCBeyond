import axios from '../axios';

// Endpoints
const getAllProducts = '/api/products';

export async function getProducts(data) {
	try {
		const response = await axios.get(getAllProducts, data);

		return {
			data: response.data?.data,
			status: response.status,
			message: response.data.message,
		};
	} catch (error) {
		return {
			data: null,
			status: error.response.status,
			message: error.response?.data?.error,
		};
	}
}
