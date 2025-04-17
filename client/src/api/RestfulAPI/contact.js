import axios from '../axios';
import { getToken } from '../../components/shared/common/auth';

const ContactEndpoint = '/api/contact';

export async function addToContact(contactFields) {
	try {
		const token = getToken();

		const response = await axios.post(ContactEndpoint, contactFields, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.log('error', error);
		console.error('Error adding to cart:', error);
		throw error;
	}
}

export async function getCart() {
	try {
		const token = getToken();

		const response = await axios.get(`${ContactEndpoint}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {
		console.error('Error getting cart:', error);
		throw error;
	}
}
