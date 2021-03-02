const Marks = require('../../models/marks');

exports.marks = {
	CreateMarks: async function(req, res) {
		const newMarks = await Marks(req.body);
		await newMarks.save();
		res.send(newMarks);
	},
	InsertMarks: async function(req, res) {
		try {
			const marks = await Marks.create(req.body);
			res.send(marks);
		} catch (er) {
			res.json({ message: 'errors' });
		}
	},
	ListMarks: async function(req, res) {
		const listMarks = await Marks.find({}).populate('formId').populate('subjectId');
		res.send(listMarks);
	},
	updateMarks: async function(req, res) {
		const listMarks = await Marks.find({ subjectId: req.params.subjectId });
		try {
			const updatedMarks = await Marks.findOneAndUpdate(
				{ subjectId: req.params.subjectId },
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
			res, send({ message: 'Error' });
		}
	}
};
