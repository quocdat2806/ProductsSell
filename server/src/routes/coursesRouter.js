const courseController = require('../controllers/CoursesController')


const express = require('express');
const courseRouter = express.Router();
courseRouter.get('/',courseController.index)
courseRouter.get('/learning/:slug/:id',courseController.index)
courseRouter.get('/courses/:slug',courseController.index)
courseRouter.get('/courses',courseController.index)
courseRouter.get('/',courseController.index)






module.exports =  courseRouter