const Form = require('../../models/form');

exports.form = {
	CreateForm: async function(req, res) {
		const newForm = await Form(req.body);
		await newForm.save();
		res.send(newForm);
	},
	ListForm: async function(req, res) {
		const listForm = await Form.find({})
			.populate('programId')
			.populate('subjectId')
			.populate('semesterId')
		res.send(listForm);
	}
};
