const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Environment
require('dotenv').config()


const ServiceRouter = require('./routes/service.js');
const AuthRouter = require('./routes/auth.js');

const PORT = 8050;
const MONGODB_URI = 'mongodb://172.16.222.73:8081/service';



const app = express();

// https://github.com/axios/axios/issues/587#issuecomment-521302097
app.use(cors({ credentials: true, origin: 'http://193.150.100.254:8070' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(AuthRouter)
app.use('/service', ServiceRouter);

app.get('/', (req, res) => {
	res.send('Service server is running');
});

const start_server = () => {
	app.listen(PORT, () => {
		console.log('Server started');
	});
};

mongoose.connect(
	MONGODB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	start_server
);
