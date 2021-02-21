const mongoose = require('mongoose');

const DepartmentSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	programs: [
		{
			ref: 'program',
			type: mongoose.Schema.Types.ObjectId
		}
	]
});

module.exports = mongoose.model('department', DepartmentSchema);
