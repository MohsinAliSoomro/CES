const Form = require('../../models/form');

exports.form = {
	CreateForm: async function(req, res) {
		try {
			const newForm = await Form(req.body);
			await newForm.save();
			res.send(newForm);
		} catch (error) {
			res.send({ message: 'something wrong create form' });
		}
	},
	ListForm: async function(req, res) {
		try {
			// const listForm = await Form.aggregate([
			// 	{
			// 		$unwind:"$subjectId"
			// 	},
			// 	{
			// 		$match: {
			// 			studentId:{studentId:"6041241912ad281dace9e4e3"}
			// 		}
			// 	},
			// 	{
			// 		$lookup: {
			// 			from: "students",
			// 			localField: "id",
			// 			foreignField: "studentId",
			// 			as:"students"
			// 		}
			// 	}

			// ])
			const listForm = await Form.find({})
				.populate('programId')
				.populate('subjectId')
				.populate('semesterId')
				.populate('studentId')
				.exec();
			res.send(listForm);
		} catch (error) {
			res.send({ message: 'something error in the getting forms' });
		}
	},
	formSearch: async function(req, res) {
		try {
			const searchForm = await Form.find({
				programId: req.body.programId,
				subjectId: req.body.subjectId,
				type: req.body.type,
				semesterId: req.body.semesterId
			})
				.populate('studentId')
				.populate('programId', { name: 1 })
				.populate('subjectId', { name: 1 })
				.populate('semesterId')
				.exec();
			res.send(searchForm);
		} catch (error) {
			res.send({ message: 'something error in the getting form' });
		}
	}
};
