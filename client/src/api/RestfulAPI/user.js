import axios from '../axios';

// Endpoints
const registerEndPoint = '/api/user';
const loginEndPoint = '/api/login';

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

export async function loginUser(data) {
	try {
		const response = await axios.post(loginEndPoint, data);

		return {
			token: response.data?.token,
			status: response.status,
			message: response.data?.message,
		};
	} catch (error) {
		return {
			data: null,
			status: error.response.status,
			message: error.response?.data?.message,
		};
	}
}
