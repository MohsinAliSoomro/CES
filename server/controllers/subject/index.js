const Subject = require('../../models/subject');

exports.subject = {
	createSubject: async (req, res) => {
		const subject = await Subject(req.body);
		await subject
			.save()
			.then((re) => {
				res.send(subject);
			})
			.catch((er) => res.send(er));
	},
	subjects: async (req, res) => {
		const subject = await Subject.find({}).populate('semesterId');
		res.send(subject);
	},
	subject: async (req, res) => {
		const subject = await Subject.find({ _id: req.params.id }).populate('semesterId');
		res.send(subject);
	},
	subjectSemester: async (req, res) => {
		const subject = await Subject.find({ semesterId: req.params.id }).populate('semesterId');
		res.send(subject);
	},
	SubjectDelete: async (req, res) => {
		const subject = await Subject.findOneAndDelete({ _id: req.params.id });
		res.send(subject);
	},
	subjectUpdate: async (req, res) => {
		const subject = await Subject.findOne({ _id: req.params.id });
		if (subject) {
			const sms = await Subject.findByIdAndUpdate(
				{ _id: req.params.id },
				{
					$set: {
						name: req.body.name,
						semesterId: req.body.programId,
						type: req.body.type
					}
				}
			);
			res.send(sms);
		} else {
			res.json({ message: 'Subject updated...' });
		}
	}
};
