const authController = require('../controllers/AuthController')


const express = require('express');
const authRouter = express.Router();
authRouter.get('/',authController.getAll)








module.exports =  authRouter