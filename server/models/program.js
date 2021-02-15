const mongoose = require('mongoose');

const ProgramSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	department: {
		ref: 'department',
		type: mongoose.Schema.Types.ObjectId
	}
});

module.exports = mongoose.model('program', ProgramSchema);
