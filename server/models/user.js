const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	email: {
		type: String,
        required: true,
        unique:true
	},
	password: {
		required:true,
		type: String
	},
    username: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('user', UserSchema);
