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
	},
	UpdateProgram: async function(req, res) {
		try {
			const findProgram = await Program.findOne({ _id: req.params.id });
			if (findProgram) {
				const updateProgram = await Program.findByIdAndUpdate(
					{ _id: req.params.id },
					{
						$set: {
							name: req.body.name,
							department: req.body.department
						}
					}
				);
				res.send(updateProgram);
			} else {
				res.send({ message: 'something wrong in update programs' });
			}
		} catch (error) {
			res.send({ message: 'Something error in the create program' });
		}
	},
	deleteProgram: async (req, res) => {
		try {
			const prg = await Program.findOneAndDelete({ _id: req.params.id });
			res.send(prg);
		} catch (error) {
			res.send({ message: 'something wrong get delete semester' });
		}
	}
};
