const Courses = require('../models/Courses')
const Sections = require('../models/Sections')
const Lessons = require('../models/Lessons')



class CourseService{
  getCourses(){
    return new Promise(async (resolve, reject) => {
      try {
           
          const courses = await Courses.find({})


        
              resolve({
                  status: '200',
                  message: 'SUCCESS',
                  data: {courses}
                      
              })
      } catch (e) {
          reject(e)
      }
  })

  }
  getInfor(slug){
    return new Promise(async (resolve, reject) => {
      try {
        const course = await Courses.findOne({ slug })
        const sections = await Sections.find({ courseId: course.courseId })
        const lessons = await Lessons.find({courseId:course.courseId})
        const courseDetail = {
          course: {...course.toObject()},
          sections: sections.map(section => section.toObject()),
          lessons: lessons.map(section => section.toObject())
        }
        resolve({
            status: 'OK',
            message: 'SUCCESS',
            data: courseDetail
        })
    } catch (e) {
        reject(e)
    }
  })
  }
}

module.exports = new CourseService