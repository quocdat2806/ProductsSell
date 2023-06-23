const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const slug= require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema;
const LearningPath = new Schema({
  name: { type: String},
  content: { type: String},
  description: { type: String},
  image: { type: String},
  id:{type: Number},
  courses:{type:Array},
  slug:{type:String, slug : 'name',unique:true}
},{timestamps:true});
module.exports = mongoose.model('LearningPath',LearningPath);