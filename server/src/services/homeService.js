const Courses = require('../models/Courses')
const Posts = require('../models/Posts')
const Videos = require('../models/Videos')


class HomeService{
     getAll(){
        return new Promise(async (resolve, reject) => {
            try {
                 
                const courses = await Courses.find({})
                const posts = await Posts.find({})
                const videos = await Videos.find({})



              
                    resolve({
                        status: '200',
                        message: 'SUCCESS',
                        data: {
                            courses,
                            posts,
                            videos
                        }
                    })
            } catch (e) {
                reject(e)
            }
        })



    }
}

module.exports = new HomeService