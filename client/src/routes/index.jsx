import Home from "../pages/Home"
import Blog from "../pages/Blog"
import LearningPath from "../pages/LearningPath"
import Courses from "../pages/Courses"
import CourseDetail from "../components/CourseDetail"
import LessonDetail from "../components/LessonDetail"


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
        path:'/learning/:slug',
        component:LessonDetail,
        layout:null
    }, 
    {
        path:'/courses/:slug',
        component:CourseDetail
    },
    {
        path:'/courses',
        component:Courses,
       
    },
]
const privateRouters = [

]
export {publicRouters,privateRouters}