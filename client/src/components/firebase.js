// firebase.js
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
	apiKey: 'AIzaSyCCiaioX1ph4xHhiT9X-YbIpo2flvc-n7o',
	authDomain: 'cscbeyon.firebaseapp.com',
	projectId: 'cscbeyon',
	storageBucket: 'cscbeyon.firebasestorage.app',
	messagingSenderId: '478919817516',
	appId: '1:478919817516:web:ff260142f989ec8dd3d489',
	measurementId: 'G-CR90LVQHF8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = getMessaging(app);
let fcmToken = '';
// This will be used for requesting notification permissions from the user
export const requestNotificationPermission = async () => {
	try {
		const permission = await Notification.requestPermission();
		console.log('permission', permission);

		if (permission === 'granted') {
			fcmToken = await getToken(messaging, {
				vapidKey: 'BHHNoe30f0EsMGo6Y56qG88N5ts5d3NdcPTvBaNCR81AZGcrbeVyfAHW_S1GI7Kb0OgTan_smgwBkZ4eui-osjI',
			});
			console.log('FCM Token:', fcmToken); // Save this token to the backend
		}
	} catch (error) {
		console.error('Notification permission error:', error);
	}
};

export { messaging, fcmToken };
