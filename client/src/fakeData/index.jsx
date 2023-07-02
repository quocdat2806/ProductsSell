import { HomeIcon , LearningPathIcon , CourseIcon ,BlogIcon } from "../Icons/index.jsx";
export const SidebarIcon = [
    {
        title:'Home',
        icon :HomeIcon,
        isActive:true,
        path:'/'
    },
    {
        title:'Lộ trình',
        icon :LearningPathIcon,
        isActive:false,
        'path':'/learning-path'

    },
    {
        title:'Học',
        icon :CourseIcon,
        isActive:false,
        'path':'/courses'

    },
    {
        title:'Blog',
        icon :BlogIcon,
        isActive:false,
        'path':'/blog'

    },
    
]




export const slidesShow = [
    {
        heading:"Khóa học HTML CSS Pro",
        description:"Đây là khóa học đầy đủ và chi tiết nhất bạn có thể tìm thấy trên Internet",
        button:"Tìm hiểu thêm",
        backGround:"linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))",
        img:'./src/assets/img/slider1.png'
    },
    {
        heading:"Thành Quả của học viện",
        description:"Để đạt được kết quả tốt trong mọi việc cần xác định mục tiêu rõ ràng cho việc đó.Học lập trình cũng không phải ngoại lệ",
        button:"Tìm hiểu thêm",
        backGround:"linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254))",
        
        img:'./src/assets/img/slider2.png'
    },
    {
        heading:"F8 trên Youtube",
        description:"F8 được nhắc tới ở mọi nơi,ở đâu có cơ hội việc làm cho ngành IT và có những con người yêu thích lập trình F8 sẽ ở đó",
        button:"Truy cập kênh",
        backGround:"linear-gradient(to right, rgb(104, 40, 250), rgb(255, 186, 164))",
        
        img:'./src/assets/img/slider3.png'
    },
    {
        heading:"Khóa ReactJS Miễn Phí",
        description:"Khóa học ReactJS từ cơ bản đến nâng cao.Kết quả của khóa học này là bạn có thể làm hầu hết dự án thường gặp với ReactJS",
        button:"Đăng ký ngay",
        backGround:"linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))",
        
        img:'./src/assets/img/slider4.png'
    },
    {
        heading:"F8 trên Facebook",
        description:"F8 được nhắc tới ở mọi nơi,ở đâu có cơ hội việc làm cho ngành IT và có những con người yêu thích lập trình F8 sẽ ở đó",
        button:"Truy cập Facebook",
        backGround:"linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255))",
        img:'../src/assets/img/slider5.png'
    },
]



