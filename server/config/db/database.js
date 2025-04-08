const mongoose = require('mongoose');
const db = require('./index');

// connect to DB
mongoose
	.connect(db.db.uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => console.log(err));

require('../module/courses');
require('../module/subscription');
require('../module/usesr');
