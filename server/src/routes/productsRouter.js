const productController = require('../controllers/ProductController')


const express = require('express');
const productRouter = express.Router();
productRouter.get('/',productController.index)




module.exports =  productRouter