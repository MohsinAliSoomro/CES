const express = require('express');
const app = express();
const DatabaseConnection = require('./config/mongodb.js');
const cors = require('cors');
//Environment Variable
require('dotenv').config();
app.use(cors());
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
//student routes
const student = require('./routes/student');
app.use('/student', student);
//student routes
const semester = require('./routes/semester');
app.use('/semester', semester);
//student routes
const subject = require('./routes/subject');
app.use('/subject', subject);

app.listen(process.env.PORT, () => {
	console.log(`Server Running on Port ${process.env.PORT} `);
});
