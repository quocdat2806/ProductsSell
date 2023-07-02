import { useState, useEffect } from "react";
import fetchData from "../fetch";

const useFetch = (option) => {
  const [dataHome, setDataHome] = useState();
  useEffect(() => {
    fetchData("http://localhost:5000/").then((res) => {
      const { courses, posts, videos } = res.data;
      const freeCourses = courses.filter((course) => {
        return !course.isPro;
      });
      const proCourses = courses.filter((course) => {
        return course.isPro;
      });
      if(option){
        setDataHome([
          {
              title:'Khóa học Pro',
              isPro:true,
              data: proCourses,
              isPrice:true
          },
          {
              title:'Khóa học miễn phí',
              data: freeCourses,
              isStrong:true,
              isStudentCount:true
          }
        ])

      }else{
        setDataHome([
          {
              title:'Khóa học Pro',
              isPro:true,
              data: proCourses,
              isPrice:true
          },
          {
              title:'Khóa học miễn phí',
              data: freeCourses,
              isStrong:true,
              isStudentCount:true
          },
          {
              title:'Bài viết nổi bật',
              data:posts,
              isPost:true
          },
          {
              title:'Video nổi bật',
              data:videos,
              isVideo:true
          },
        ]);

      }
    
    });
  }, []);
  return dataHome;
};

export default useFetch;
