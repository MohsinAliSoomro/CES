const Subject = require('../../models/subject');

exports.subject = {
	createSubject: async (req, res) => {
		try {
			const subject = await Subject(req.body);
			await subject.save();
			res.send(subject);
		} catch (error) {
			res.send({ message: 'something wrong in create subject' });
		}
	},
	subjects: async (req, res) => {
		try {
			const subject = await Subject.find({}).populate('semesterId');
			res.send(subject);
		} catch (error) {
			res.send({ message: 'something wrong in get subjects' });
		}
	},
	subject: async (req, res) => {
		try {
			const subject = await Subject.find({ _id: req.params.id }).populate('semesterId');
			res.send(subject);
		} catch (error) {
			res.send({ message: 'something wrong in get subject' });
		}
	},
	subjectSemester: async (req, res) => {
		try {
			const subject = await Subject.find({ semesterId: req.params.id }).populate('semesterId');
			res.send(subject);
		} catch (error) {
			res.send({ message: 'something wrong in get subject semester' });
		}
	},
	SubjectDelete: async (req, res) => {
		try {
			const subject = await Subject.findOneAndDelete({ _id: req.params.id });
			res.send(subject);
		} catch (error) {
			res.send({ message: 'something wrong in get delete subject' });
		}
	},
	subjectUpdate: async (req, res) => {
		try {
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
		} catch (error) {
			res.send({ message: 'something wrong in get update subject' });
		}
	}
};
