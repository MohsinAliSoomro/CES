const mongoose = require('mongoose');

const SubjectSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	semesterId: {
		ref: 'semester',
		type: mongoose.Schema.Types.ObjectId
	},
	creditHour: {
		type:Number
	},
	type: {
		type: String,
		enum: [ 'Theory', 'Practical' ],
		default: 'Theory'
	}
},{timestamps: true} );

module.exports = mongoose.model('subject', SubjectSchema);
