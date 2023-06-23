const courseController = require('../controllers/CoursesController')


const express = require('express');
const courseRouter = express.Router();
// courseRouter.get('/learning/:slug/:id',courseController.index)
courseRouter.get('/:slug',courseController.courseInfor)
// courseRouter.get('/courses',courseController.index)
courseRouter.get('/',courseController.getCourses)






module.exports =  courseRouter