const Program = require('../../models/program');
const Department = require('../../models/department');
exports.pro = {
	CreateProgram: async function(req, res) {
		const newProgram = new Program({ name: req.body.name, department: req.body.department });
		await newProgram.save();
		await Department.findByIdAndUpdate(
			{ _id: newProgram.department },
			{
				$push: {
					programs: newProgram._id
				}
			}
		);
		res.send(newProgram);
	},
	ListProgram: async function(req, res) {
		const listPro = await Program.find({}).populate('department', 'name');
		res.send(listPro);
	}
};
