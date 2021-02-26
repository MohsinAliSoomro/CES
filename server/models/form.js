const mongoose = require('mongoose');

const FormSchema = mongoose.Schema(
	{
		programId: {
			ref: 'program',
			type: mongoose.Schema.Types.ObjectId,
			required: true
		},
		subjectId: [
			{
				ref: 'subject',
				type: mongoose.Schema.Types.ObjectId,
				required: true
			}
		],
		semesterId: {	
			ref: 'semester',
			type: mongoose.Schema.Types.ObjectId,
			required: true
		},
		studentId: {	
			ref: 'student',
			type: mongoose.Schema.Types.ObjectId,
			required: true
		},
		type: {
			type: String,
			enum: [ 'Fresh', 'Improve/Failure' ],
			default: 'Fresh'
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('form', FormSchema);
