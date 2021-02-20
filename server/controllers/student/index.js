const Student = require('../../models/student');

exports.student = {
	createStudent: async (req, res) => {
		const student = await Student(res.body);
		await student.save().then(res => {
			res.send(student);
		}).catch(er=>res.send(er));
		
	}
};
