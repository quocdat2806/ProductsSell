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
        component:LearningPath,
        backHome:true

    },
     {
        path:'/blog',
        component:Blog,
        backHome:true
    }, 
    {
        path:'/learning/:slug',
        component:LessonDetail,
        layout:null,
        backHome:true

    }, 
    {
        path:'/courses/:slug',
        component:CourseDetail,
        backHome:true

    },
    {
        path:'/courses',
        component:Courses,
        backHome:true

       
    },
]
const privateRouters = [

]
export {publicRouters,privateRouters}