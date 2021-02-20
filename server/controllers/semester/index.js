const Semester = require('../../models/semester');

exports.semester = {
	createSemester: async (req, res) => {
		const semester = await Semester(req.body);
		await semester
			.save()
			.then((re) => {
				res.send(semester);
			})
			.catch((er) => res.send(er));
	},
	semesters: async (req, res) => {
		const semester = await Semester.find({});
		res.send(semester);
	},
	semester: async (req, res) => {
		const semester = await Semester.find({ _id: req.params.id });
		res.send(semester);
    },
    semesterProgram: async (req, res) => {
		const semester = await Semester.find({ programId: req.params.id });
		res.send(semester);
	},
	semesterDelete: async (req, res) => {
		const semester = await Semester.findOneAndDelete({ _id: req.params.id });
		res.send(semester);
	},
	semesterUpdate: async (req, res) => {
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
	}
};
