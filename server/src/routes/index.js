const productRouter = require('./productsRouter')


function routers(app){
    app.use('/',productRouter)
    

}
module.exports = routers