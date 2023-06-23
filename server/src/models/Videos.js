const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const slug= require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema;
const Video = new Schema({
  name: { type: String},
  thums: { type: String},
  videoIds: { type: String},
  likes: { type:Number},
  views: { type:String},
  comments: { type:String},
  duration:{type:String},
  slug:{type:String, slug : 'name',unique:true}
},{timestamps:true});
module.exports = mongoose.model('Video',Video);