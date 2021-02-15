const Program = require('../../models/program');

exports.pro = {
	CreateProgram: async function(req, res) {
		const newProgram = new Program({ name: req.body.name, department: req.body.department });
		await newProgram.save();
		res.send(newProgram);
	},
	ListProgram: async function(req, res) {
		const listPro = await Program.find({}).populate('department',"name");
		res.send(listPro);
	}
};
