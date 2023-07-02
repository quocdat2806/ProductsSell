const homeController = require('../controllers/HomeController')


const express = require('express');
const homeRouter = express.Router();
homeRouter.get('',homeController.getAll)







module.exports =  homeRouter