import classNames from "classNames/bind";
import styles from "./CourseDetail.module.scss";
const cx = classNames.bind(styles);
import IndexModule from "../IndexModule";
import CurriculumOfCourse from "../CurriculumOfCourse";

const CourseDetail = () => {
  const ModuleRow = IndexModule["index-module-row"];
  const ModuleCol = IndexModule["index-module-col"];
  const ModuleGrid = IndexModule["index-module-grid"];

  return (
    <>
      <ModuleGrid >
        <ModuleRow className={cx("CourseDetail_wrapper")}>
          <ModuleCol col_66>
            <h1 className={cx('CourseDetail_courseName')}>Kien thuc nhap mon</h1>
            <div className={cx('CourseDetail_textContent')}>
            Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục con đường trở thành một lập trình viên.

            </div>
            <CurriculumOfCourse/>
            <ModuleRow/>

          </ModuleCol>
          <ModuleCol col_33></ModuleCol>
        </ModuleRow>
      </ModuleGrid>
    </>
  );
};

export default CourseDetail;
