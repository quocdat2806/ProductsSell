const courseRouter = require('./coursesRouter')
const homeRouter = require('./homeRouter')
const learningRouter = require('./learningRouter')




function routers(app){
    app.use('/courses',courseRouter)
    app.use('/learning-paths',learningRouter)
    app.use('/auth',homeRouter)
    app.use('/',homeRouter)

    

}
module.exports = routers