const courseRouter = require('./coursesRouter')
const homeRouter = require('./homeRouter')
const learningRouter = require('./learningRouter')
const authRouter = require('./authRouter')
const authozation = require('../middleware')

function routers(app){
    app.use('/courses',courseRouter)
    app.use('/learning-paths',learningRouter)
    app.use('/auth',authozation,authRouter)
    app.use('/',homeRouter)
}
module.exports = routers