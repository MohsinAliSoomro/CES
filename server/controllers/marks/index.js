const Marks = require('../../models/marks');

exports.marks = {
	CreateMarks: async function(req, res) {
		try {
			const newMarks = await Marks(req.body);
			await newMarks.save();
			res.send(newMarks);
		} catch (error) {
			res.json({ message: 'something error in Insert Mark' });
		}
	},
	InsertMarks: async function(req, res) {
		try {
			const marks = await Marks.create(req.body);
			res.send(marks);
		} catch (er) {
			res.json({ message: 'something error in insert marks' });
		}
	},
	ListMarks: async function(req, res) {
		try {
			const listMarks = await Marks.find({}).populate('formId').populate('subjectId');
			res.send(listMarks);
		} catch (error) {
			res.json({ message: 'Something error in list of marks' });
		}
	},
	StudentMarks: async function(req, res) {
		try {
			const listMarks = await Marks.find({ studentId: req.params.studentId })
				.populate('formId')
				.populate('subjectId')
				.populate('studentId');
			res.send(listMarks);
		} catch (error) {
			res.json({ message: 'Something error in list of marks' });
		}
	},
	updateMarks: async function(req, res) {
		try {
			// const listMarks = await Marks.find({ subjectId: req.params.subjectId, studentId: req.params.studentId });
			// res.send(listMarks);
			const updatedMarks = await Marks.findOneAndUpdate(
				{ subjectId: req.params.subjectId, studentId: req.params.studentId },
				{
					$push: {
						formId: req.body.formId,
						marks: Number(req.body.marks)
					}
				},
				{ new: true }
			);
			res.send(updatedMarks);
		} catch (err) {
			res.send({ message: 'something error in updating marks' });
		}
	}
};
