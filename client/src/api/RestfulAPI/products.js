import axios from '../axios';

// Endpoints
const getAllProducts = '/api/products';
const getProductByIDEndPoint = '/api/product';
const getProductByLatestEndPoint = '/api/latestProducts';

export async function getProducts(page = 1, limit = 5) {
	try {
		const response = await axios.get(`${getAllProducts}/?page=${page}&limit=${limit}`);

		return {
			data: response.data?.data,
			status: response.status,
			message: response.data.message,
			totalProducts: response.data.totalProducts,
		};
	} catch (error) {
		return {
			data: null,
			status: error.response.status,
			message: error.response?.data?.error,
		};
	}
}

export async function getProductByID(id) {
	try {
		const response = await axios.get(`${getProductByIDEndPoint}/${id}`);

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

export async function getProductByCategory(category) {
	try {
		const response = await axios.get(`${getAllProducts}/?category=${category}`);

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

export async function getProductsFetured(page, productsPerPage) {
	try {
		const response = await axios.get(`${getAllProducts}/featured/?page=${page}&limit=${productsPerPage}`);

		console.log('response', response);
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

export async function getProductByLatest() {
	try {
		const response = await axios.get(`${getProductByLatestEndPoint}`);

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
