import axios from '../axios';
// End points
const registerEndPoint = '/register';

export async function register(data) {
	const userInfo = await axios.post(registerEndPoint, data);
	return userInfo;
}
