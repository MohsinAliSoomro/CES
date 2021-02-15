const Department = require('../../models/department');

exports.dep = {
	CreateDepartment: async function(req, res) {
		const newDep = await Department({ name: req.body.name });
		await newDep.save();
		res.send(newDep);
	},
	ListDepartment: async function(req, res) {
		const listDep = await Department.find({});
		res.send(listDep);
	}
};
