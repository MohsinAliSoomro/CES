const mongoose = require('mongoose');

const SemesterSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	programId: {
		ref: 'program',
		type: mongoose.Schema.Types.ObjectId
	}
});

module.exports = mongoose.model('semester', SemesterSchema);
