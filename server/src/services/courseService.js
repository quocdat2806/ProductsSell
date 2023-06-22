const Courses = require('../models/Courses')
const Posts = require('../models/Posts')
const Videos = require('../models/Videos')


class CourseService{
    getAll(){
        try {
            const coursesList = Courses.find({}).then(courses => {
              return courses
            })
            const postsList = posts.find({}).then(posts => {
              return posts
            })
            const videosList = Videos.find({}).then(videos => {
              return videos
            })
             Promise.all([coursesList, postsList,videosList]).then((data) => {
                
              res.json({
                courses:data[0],
                posts:data[1],
                videos:data[2]
              });
            })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: courseDetail
            })
        } catch (e) {
            reject(e)
        }
    }

}

module.exports = new CourseService