const User = require('../../models/user');

exports.user = {
	CreateUser: async function(req, res) {
		try {
			
			const newUser = await User(req.body);
			await newUser.save();
			res.send(newUser);
		} catch (error) {
			res.send({ message: 'something wrong in creating user' });
		}
	},
	ListUser: async function(req, res) {
		try {
			const listUser = await User.find({}).populate('programs', 'name');
			res.send(listUser);
		} catch (error) {
			res.send({ message: 'something wrong in get department' });
		}
	},
	loginUser: async function(req, res) {
		try {
			const { email, password } = req.body;
			const findUser = await User.findOne({ email: email });
			if (!findUser) {
				res.send({ message: 'Email is invalid' });
			}
			if (findUser.password !== password) {
				res.send({ message: 'password does not match' });
			}
			if (findUser.password === password) {
				res.send(findUser);
			}
		} catch (error) {
			res.send({ message: 'Login Failed' });
		}
	}
};
