const admin = require('firebase-admin');

// استخدم ملف مفتاح الخدمة الخاص بك الذي يمكنك تحميله من Firebase Console
const serviceAccount = require('./cscbeyon-firebase-adminsdk-fbsvc-f20b4c1848.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
