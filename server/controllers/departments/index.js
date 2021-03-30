const Department = require('../../models/department');

exports.dep = {
	CreateDepartment: async function(req, res) {
		try {
			const newDep = await Department({ name: req.body.name });
			await newDep.save();
			res.send(newDep);
		} catch (error) {
			res.send({ message: 'something wrong in creating department' });
		}
	},
	ListDepartment: async function(req, res) {
		try {
			const listDep = await Department.find({}).populate('programs', 'name');
			res.send(listDep);
		} catch (error) {
			res.send({ message: 'something wrong in get department' });
		}
	}
};
