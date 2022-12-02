const exress = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const ServiceRouter = require('./routes/service.js');

const PORT = 5050;
const MONGODB_URI = 'mongodb://172.16.222.73:8081/service';

const app = exress();

app.use(cors());

app.use('/service', ServiceRouter);

app.get('/', (req, res) => {
	res.send('Service server is running');
});

const start_server = () => {
	app.listen(PORT, () => {
		console.log('Server started');
	});
};

mongoose.connect(MONGODB_URI, start_server);