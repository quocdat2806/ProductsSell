const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const slug= require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema;
const Course = new Schema({
  name: { type: String},
  thums: { type: String},
  courseId: {type: Number},
  description:{type:String},
  isPro:{type:Boolean},
  learn:{type:Array},
  requests:{type:Array},
  levels:{type:String},
  slogan:{type:String},
  slug:{type:String, slug : 'name',unique:true}
},{timestamps:true});
module.exports = mongoose.model('Course',Course);