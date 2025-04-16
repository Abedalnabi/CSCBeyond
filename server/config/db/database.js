const mongoose = require('mongoose');
const db = require('./index');

// connect to DB
mongoose
	.connect(db.db.uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB Connected', db.db.uri))
	.catch((err) => console.log(err));

require('../module/category');
require('../module/contactus');
require('../module/user');
require('../module/role');
require('../module/order');
require('../module/product');
require('../module/cart');
