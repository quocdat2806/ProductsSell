import Home from "../pages/Home"
import Blog from "../pages/Blog"
import LearnPath from "../pages/LearnPath"
import Courses from "../pages/Courses"


const publicRouters = [

    {
        path:'/',
        component:Home
    },
    {
        path:'/learning-path',
        component:LearnPath
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