const Courses = require('../models/Courses')
const Posts = require('../models/Posts')
const Videos = require('../models/Videos')

const request = require('../fetch/index')




class HomeService{
   async  getAll(){
    const res = await request(process.env.DEFAULT_URL)

    }
}

module.exports = new HomeService