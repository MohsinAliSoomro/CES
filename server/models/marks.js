const mongoose = require('mongoose');

const MarksSchema = mongoose.Schema(
	{
		formId: [
			{
				ref: 'form',
				type: mongoose.Schema.Types.ObjectId,
				required: true
			}
		],
		subjectId: {
			ref: 'subject',
			type: mongoose.Schema.Types.ObjectId,
			required: true
		},
		marks: [
			{
				type: Number,
				required: true
			}
		],
		studentId: {
			ref: 'student',
			type: mongoose.Schema.Types.ObjectId,
			required: true
		},
		semesterId: {
			ref: 'semester',
			type: mongoose.Schema.Types.ObjectId,
			required: true
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('marks', MarksSchema);
