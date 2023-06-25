import Home from "../pages/Home"
import Blog from "../pages/Blog"
import LearningPath from "../pages/LearningPath"
import Courses from "../pages/Courses"


const publicRouters = [

    {
        path:'/',
        component:Home
    },
    {
        path:'/learning-path',
        component:LearningPath
    },
     {
        path:'/blog',
        component:Blog
    }, 
    {
        path:'/courses',
        component:Courses
    },
]
const privateRouters = [

]
export {publicRouters,privateRouters}