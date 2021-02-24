const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	fatherName: {
		type: String,
		required: true
	},
	surname: {
		type: String,
		required: true
	},
	religion: {
		type: String,
		required: true
	},
	nationality: {
		type: String,
		required: true
	},
	address: {	
		type: String,
		required: true
	},
	district: {
		type: String,
		required: true
	},
	programId: {
		ref: 'program',
		type: mongoose.Schema.Types.ObjectId
	}
});

module.exports = mongoose.model('student', StudentSchema);
