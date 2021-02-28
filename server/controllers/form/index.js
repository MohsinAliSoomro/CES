const Form = require('../../models/form');

exports.form = {
	CreateForm: async function(req, res) {
		const newForm = await Form(req.body);
		await newForm.save();
		res.send(newForm);
	},
	ListForm: async function(req, res) {
		const listForm = await Form.find({}).populate('programId').populate('subjectId').populate('semesterId');
		res.send(listForm);
	},
	formSearch: async function(req, res) {
		const searchForm = await Form.find({
			programId: req.body.programId,
			subjectId: req.body.subjectId,
			type: req.body.type,
			semesterId: req.body.semesterId
		})
			.populate('studentId')
			.populate('programId', { name: 1 })
			.populate('subjectId', { name: 1 })
			.populate('semesterId', { name: 1 });
		res.send(searchForm);
	}
};
