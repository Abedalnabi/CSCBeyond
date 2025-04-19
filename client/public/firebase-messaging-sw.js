// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
	apiKey: 'AIzaSyCCiaioX1ph4xHhiT9X-YbIpo2flvc-n7o',
	authDomain: 'cscbeyon.firebaseapp.com',
	// databaseURL: 'https://project-id.firebaseio.com',
	projectId: 'cscbeyon',
	storageBucket: 'cscbeyon.firebasestorage.app',
	messagingSenderId: '478919817516',
	appId: '1:478919817516:web:ff260142f989ec8dd3d489',
	measurementId: 'G-CR90LVQHF8',
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
	console.log('[firebase-messaging-sw.js] Received background message', payload);

	// Customize notification here
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: payload.notification.image,
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
