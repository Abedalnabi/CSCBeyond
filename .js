import React, { useEffect } from 'react';
import { useUser } from './UserContext'; // استخدام الـ Context أو يمكنك استخدام الـ Redux

const App = () => {
	const { user } = useUser(); // احصل على المستخدم من الـ Context

	useEffect(() => {
		if (user && user.role === 'admin') {
			// في حال كان الـ role هو admin، يمكنك الآن السماح بعرض الإشعار
			// استدعاء الـ Firebase Cloud Messaging أو أي إشعار آخر
			if (Notification.permission === 'granted') {
				new Notification('Admin Notification', {
					body: 'You have a new order!',
				});
			} else {
				// طلب إذن المستخدم لعرض الإشعارات
				Notification.requestPermission().then((permission) => {
					if (permission === 'granted') {
						new Notification('Admin Notification', {
							body: 'You have a new order!',
						});
					}
				});
			}
		}
	}, [user]);

	return (
		<div>
			<h1>Welcome to React App</h1>
		</div>
	);
};

export default App;
