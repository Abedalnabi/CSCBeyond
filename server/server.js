const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { SERVER_PORT } = require('./config/env/env');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Connect Database
require('./config/db/database');

// Middleware
// add the Routes to the App
const Routes = require('./middleware/routes');
Routes.register(app);

app.get('/', (req, res) => {
	res.send('Hello World');
});

// Connect Server
app.listen(SERVER_PORT || 4000, () => console.log('Server running on port 4000'));
