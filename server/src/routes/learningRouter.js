const learningController = require('../controllers/LearningController')
const express = require('express');
const homeRouter = express.Router();
homeRouter.get('/font-end-developer',learningController.getPathInfor)
homeRouter.get('/back-end-developer',learningController.getPathInfor)
homeRouter.get('/',learningController.getLearningPath)
module.exports =  homeRouter