const courseService = require('../services/CourseService')


class ProductController{
   async getCourses(req,res){
        const response = await courseService.getCourses()
        res.json(response)
    }
   async courseInfor(req,res){
        
        const response = await courseService.getInfor('kien-thuc-nhap-mon-it')
        res.json(response)

    }



}
module.exports = new ProductController