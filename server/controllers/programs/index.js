const Program = require('../../models/program');
const Department = require('../../models/department');
exports.pro = {
	CreateProgram: async function(req, res) {
		try {
			const newProgram = new Program(req.body);
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
		} catch (error) {
			res.send({ message: 'Something error in the create program' });
		}
	},
	ListProgram: async function(req, res) {
		try {
			const listPro = await Program.find({}).populate('department', 'name').populate('semestersId');
			res.send(listPro);
		} catch (error) {
			res.send({ message: 'Something error in the list of program' });
		}
	}
};
