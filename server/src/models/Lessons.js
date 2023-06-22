const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const slug= require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema;
const Lesson = new Schema({
  name: { type: String},
  courseId: { type: Number},
  lessonId: { type: Number},
  videoId: { type: String},
  slug:{type:String, slug : 'name',unique:true}
},{timestamps:true});
module.exports = mongoose.model('Lesson',Lesson);