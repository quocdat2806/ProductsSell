const courseRouter = require('./coursesRouter')


function routers(app){
    app.use('/',courseRouter)
    app.use('/learning-paths',courseRouter)

    

}
module.exports = routers