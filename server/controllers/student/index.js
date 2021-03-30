const Student = require('../../models/student');

exports.student = {
	createStudent: async (req, res) => {
		try {
			const student = await Student(req.body);
			await student.save();
			res.send(student);
		} catch (error) {
			res.send({ message: 'something error in the inserting student', error });
		}
	},
	students: async (req, res) => {
		try {
			const student = await Student.find({}).populate('programId');
			res.send(student);
		} catch (error) {
			res.send({ message: 'something error in the getting student', error });
		}
	},
	studentProgram: async (req, res) => {
		try {
			const student = await Student.find({ programId: req.params.id }).populate('programId');
			res.send(student);
		} catch (error) {
			res.send({ message: 'something error in the getting student', error });
		}
	},
	student: async (req, res) => {
		try {
			const student = await Student.find({ _id: req.params.id });
			res.send(student);
		} catch (error) {
			res.send({ message: 'something error in the getting student', error });
		}
	},
	studentDelete: async (req, res) => {
		try {
			const student = await Student.findOneAndDelete({ _id: req.params.id });
			res.send(student);
		} catch (error) {
			res.send({ message: 'something error in the deleting student', error });
		}
	},
	studentUpdate: async (req, res) => {
		try {
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
							programId: req.body.programId,
							rollno:req.body.rollno
						}
					}
				);
				res.send(std);
			}
		} catch (error) {
			res.send({ message: 'something error in the updating student', error });
		}
	}
};
