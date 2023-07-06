import classNames from "classNames/bind";
import styles from "./CourseItem.module.scss";
import {  StudentsCountIcon } from "../../Icons";
const cx = classNames.bind(styles);

class CourseItem {
  "CourseItem_pro-icon"() {
      return (
        <div className={cx("CourseItem_pro-icon")}>
        <img
          src="https://fullstack.edu.vn/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg"
          alt="vip"
        />
      </div>

      )
 
  }
  "CourseItem_old-price"({ oldPrice }) {
    return(

    <span className={cx("CourseItem_old-price")}>{oldPrice}</span>
    )
  }
  "CourseItem_main-price"({ mainPrice }) {
    return(
    <span className={cx("CourseItem_main-price")}>{mainPrice}</span>
    )
  }
  "CourseItem_students-count"({ studentsCount }) {

    return(
    <div className={cx("CourseItem_students-count")}>
     <StudentsCountIcon/>
      <span>{studentsCount}</span>
    </div>
    );
  }
}

export default new CourseItem;
