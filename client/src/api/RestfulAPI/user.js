import axios from '../axios';

// Endpoints
const registerEndPoint = '/api/user';

export async function register(data) {
	try {
		const response = await axios.post(registerEndPoint, data);

		return {
			data: response.data,
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
