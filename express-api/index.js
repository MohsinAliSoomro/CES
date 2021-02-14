const express = require('express');
var morgan = require('morgan');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT | 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

mongoose.connect(
	'mongodb://localhost:27017/testDB',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	() => console.log('Database Connected')
);

var companies = require('./controller/companies.controller.js');

app.get('/api/companies/init', companies.init);

app.get('/api/companies', companies.findAll);

var products = require('./controller/products.controller.js');

app.get('/api/products', products.findAll);

app.get('/api/products/:productName', products.findByName);

app.get('/api/products/company/:companyId', products.findByCompanyId);

app.listen(PORT, () => console.log('Connected', PORT));
