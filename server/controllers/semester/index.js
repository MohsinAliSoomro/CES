const Semester = require('../../models/semester');
const Program = require('../../models/program');
exports.semester = {
	createSemester: async (req, res) => {
		try {
			const semester = await Semester(req.body);
			await semester.save();
			await Program.findByIdAndUpdate(
				{ _id: semester.programId },
				{
					$push: {
						semestersId: semester._id
					}
				}
			);
			res.send(semester)
		} catch (error) {
			res.send({ message: 'something wrong create semester' });
		}
	},
	semesters: async (req, res) => {
		try {
			const semester = await Semester.find({}).populate('programId');
			res.send(semester);
		} catch (error) {
			res.send({ message: 'something wrong get semesters' });
		}
	},
	semester: async (req, res) => {
		try {
			const semester = await Semester.find({ _id: req.params.id }).populate('programId');
			res.send(semester);
		} catch (error) {
			res.send({ message: 'something wrong get semester' });
		}
	},
	semesterProgram: async (req, res) => {
		try {
			const semester = await Semester.find({ programId: req.params.id });
			res.send(semester);
		} catch (error) {
			res.send({ message: 'something wrong get semester program' });
		}
	},
	semesterDelete: async (req, res) => {
		try {
			const semester = await Semester.findOneAndDelete({ _id: req.params.id });
			res.send(semester);
		} catch (error) {
			res.send({ message: 'something wrong get delete semester' });
		}
	},
	semesterUpdate: async (req, res) => {
		try {
			const semester = await Semester.findOne({ _id: req.params.id });
			if (semester) {
				const sms = await Semester.findByIdAndUpdate(
					{ _id: req.params.id },
					{
						$set: {
							name: req.body.name,
							programId: req.body.programId
						}
					}
				);
				res.send(sms);
			} else {
				res.json({ message: 'Error to update student' });
			}
		} catch (error) {
			res.json({ message: 'Error to update student' });
		}
	}
};
