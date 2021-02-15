const mongoose = require('mongoose');

const DepartmentSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('department', DepartmentSchema);
