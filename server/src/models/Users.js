const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const Schema = mongoose.Schema;
const Users = new Schema({
  name: { type: String},
  email: { type: String},
  refreshToken:{ type: Array},
},{timestamps:true});
module.exports = mongoose.model('Users',Users);