const Student = require('../../models/student');

exports.student = {
	createStudent: async (req, res) => {
		const student = await Student(req.body);
		await student
			.save()
			.then((re) => {
				res.send(student);
			})
			.catch((er) => res.send(er));
	},
	students: async (req, res) => {
		const student = await Student.find({}).populate("programId");
		res.send(student);
	},
	student: async (req, res) => {
		const student = await Student.find({ _id: req.params.id });
		res.send(student);
	},
	studentDelete: async (req, res) => {
		const student = await Student.findOneAndDelete({ _id: req.params.id });
		res.send(student);
	},
	studentUpdate: async (req, res) => {
		const student = await Student.findOne({ _id: req.params.id });
		if (student) {
			const std = await Student.findByIdAndUpdate(
				{ _id: req.params.id },
				{
					$set: {
						firstName: req.body.firstName,
						lastName: req.body.lastName,
						fatherName: req.body.fatherName,
						religion: req.body.religion,
						surname: req.body.surname,
						nationality: req.body.nationality,
						address: req.body.address,
						district: req.body.district,
						programId: req.body.programId
					}
				}
			);
			res.send(std);
		} else {
			res.json({ message: 'Error to update student' });
		}
	}
};
