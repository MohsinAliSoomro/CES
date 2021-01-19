const mongoose = require('mongoose');
 
const ProductSchema = mongoose.Schema({
    code: String,
    name: String,
  details: String,
  company : { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }
});
 
module.exports = mongoose.model('Product', ProductSchema);