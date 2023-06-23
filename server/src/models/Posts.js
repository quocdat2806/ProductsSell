const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const slug= require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema;
const Post = new Schema({
  name: { type: String},
  image: { type: String},
  duration:{type:Number},
  author:{type:String},
  isPro:{type:Boolean},
  times:{type:String},
  avatar:{type:String},
  slug:{type:String, slug : 'name',unique:true}
},{timestamps:true});
module.exports = mongoose.model('Post',Post);