const mongoose = require('mongoose');
function DatabaseConnection() {
	mongoose
		.connect(process.env.mongoDbURI, {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
			useCreateIndex: true
		})
		.then(() => console.log('database Connected'));
}
module.exports = DatabaseConnection;
