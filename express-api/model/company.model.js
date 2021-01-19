const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
	name: String,
	street: String,
	phone: String,
	product: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Product' } ]
});
module.exports = mongoose.model('Company', CompanySchema);
