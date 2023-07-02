import classNames from "classNames/bind";
import styles from "./CurriculumOfCourse.module.scss";
const cx = classNames.bind(styles);

function CurriculumOfCourse() {
  return (
    <div className={cx("CurriculumOfCourse_curriculumOfCourse_")}>
      <div className={cx("CurriculumOfCourse_headerSticky")}>
        <div class="CurriculumOfCourse_headerBlock__o0bme">
          <h2 class="CurriculumOfCourse_floatLeft__zxBeB">Nội dung khóa học</h2>
        </div>
        <div class="CurriculumOfCourse_subHeadWrapper__Hkcns">
          <ul>
            <li class="CurriculumOfCourse_hiddenMobile__iP-4s">
              <strong>11 </strong> chương
            </li>
            <li class="CurriculumOfCourse_dot__lIoF- CurriculumOfCourse_hiddenMobile__iP-4s">
              •
            </li>
            <li>
              <strong>138 </strong> bài học
            </li>
            <li class="CurriculumOfCourse_dot__lIoF-">•</li>
            <li>
              <span>
                Thời lượng <strong>10 giờ 29 phút</strong>
              </span>
            </li>
          </ul>
          <div class="CurriculumOfCourse_toggleBtn__jeYrM">Mở rộng tất cả</div>
        </div>
      </div>
      <div className={cx("CurriculumOfCourse_curriculumPanel")}></div>
    </div>
  );
}

export default CurriculumOfCourse;
