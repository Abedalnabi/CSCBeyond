const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const { SERVER_PORT } = require('./config/env/env');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Connect Database
require('./config/db/database');

// Rate Limiter
// const limiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	max: 100, // limit each IP to 100 requests per windowMs
// 	message: 'Too many requests, please try again later.',
// });

// app.use(limiter);

// Routes
const Routes = require('./middleware/routes');
Routes.register(app);

app.get('/', (req, res) => {
	res.send('Hello World');
});

// Connect Server
app.listen(SERVER_PORT || 4000, () => console.log('Server running on port 4000'));
