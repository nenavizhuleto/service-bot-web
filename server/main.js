const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Environment
require('dotenv').config()


const ServiceRouter = require('./routes/service.js');
const AuthRouter = require('./routes/auth.js');

const PORT = process.env.PORT || 8060;
const MONGODB_URI = 'mongodb://193.150.100.254:8081/service';


const app = express();

// https://github.com/axios/axios/issues/587#issuecomment-521302097
app.use(cors({
	credentials: true, origin: (origin, callback) => {
		console.log('request from: ', origin);
		callback(null, origin)
	}
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(AuthRouter)
app.use('/service', ServiceRouter);

app.get('/', (req, res) => {
	res.send('Service server is running');
});

const start_server = () => {
	app.listen(PORT, () => {
		console.log('Server started', PORT);
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
