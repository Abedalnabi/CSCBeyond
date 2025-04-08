const express = require('express');
const cors = require('cors');
const { SERVER_PORT } = require('./config/env/env');

const app = express();
app.use(express.json());
app.use(cors());

// Connect Database
require('./config/db/database');

//import Routers
const userRouter = require('./routers/routes/users');
const CorsesRouter = require('./routers/routes/courses');

// RestfulAPI's
app.use(userRouter);
app.use(CorsesRouter);

app.get('/', (req, res) => {
	res.send('Hello World');
});

// Connect Server
app.listen(SERVER_PORT || 4000, () => console.log('Server running on port 4000'));
