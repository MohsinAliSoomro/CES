const express = require('express');
const app = express();
const DatabaseConnection = require('./config/mongodb.js');

//Environment Variable
require('dotenv').config();

//database connection
DatabaseConnection();
app.use(express.json());
//static files
app.use('/public', express.static('Public'));

//Department Routes
const department = require('./routes/department');
app.use('/department', department);

//Program Routes
const program = require('./routes/program');
app.use('/program', program);

app.listen(process.env.PORT, () => {
	console.log(`Server Running on Port ${process.env.PORT} `);
});
