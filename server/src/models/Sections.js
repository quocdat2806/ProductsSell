const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const slug= require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema;
const Section = new Schema({
  name: { type: String},
  courseId: { type: Number},
  lessonId: { type: Number},
  slug:{type:String, slug : 'name',unique:true}
},{timestamps:true});
module.exports = mongoose.model('Section',Section);