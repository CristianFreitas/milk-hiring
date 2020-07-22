const express = require('express');
const bodyParser = require('body-parser');

const animal = require('./routes/animal-route');
const app = express();

const mongoose = require('mongoose');
let url = 'mongodb://localhost:27017/animal';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connect to MongoDB'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', animal);

let port = 7000;
app.listen(port, () => {
	console.log('Servidor em execução ' + port);
})