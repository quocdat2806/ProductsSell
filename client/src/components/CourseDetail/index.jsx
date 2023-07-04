import classNames from "classNames/bind";
import styles from "./CourseDetail.module.scss";
const cx = classNames.bind(styles);
import IndexModule from "../IndexModule";
import CurriculumOfCourse from "../CurriculumOfCourse";
import Button from "../Button";
import {
  LevelIcon,
  PlayIcon,
  SloganIcon,
  TimeIcon,
  TotalLessonIcon,
} from "../../Icons";

export function CourseDetailPurchaseBadge({ className }) {
  return (
    <div className={cx("CourseDetail_purchaseBadge")}>
      <div className={cx("CourseDetail_imgPreview")}>
        <div className={cx("CourseDetail_bg")}></div>
        <PlayIcon
          className={cx("CourseDetail_icon", "svg-inline--fa fa-circle-play")}
        />
        <p>Xem gioi thieu khoa hoc</p>
      </div>
      <h5>Mien phi</h5>
      <Button
        isPrimary
        className={cx("CourseDetail_learnNow")}
        title="DANG KY HOC"
      />
      <ul>
        <li>
          <LevelIcon  className={cx("CourseDetail_icon", "svg-inline--fa fa-guage-high")} />
          <span>Trình độ cơ bản</span>
        </li>
        <li>
          <TotalLessonIcon className={cx("CourseDetail_icon", "svg-inline--fa fa-film")} />
          <span>
            Tổng số
            <strong> 11 </strong>
            bài học
          </span>
        </li>
        <li>
          <span>
            <TimeIcon className={cx("CourseDetail_icon", "svg-inline--fa fa-clock")} />
            Thời lượng
            <strong> 03 giờ 25 phút</strong>
          </span>
        </li>
        <li>
          <SloganIcon className={cx("CourseDetail_icon", "svg-inline--fa fa-battery-full")} />
          <span>Học mọi lúc mọi nơi</span>
        </li>
      </ul>
    </div>
  );
}

const CourseDetail = () => {
  const ModuleRow = IndexModule["index-module-row"];
  const ModuleCol = IndexModule["index-module-col"];
  const ModuleGrid = IndexModule["index-module-grid"];

  return (
    <>
      <ModuleGrid>
        <ModuleRow className={cx("CourseDetail_wrapper")}>
          <ModuleCol col_66>
            <h1 className={cx("CourseDetail_courseName")}>
              Kien thuc nhap mon
            </h1>
            <div className={cx("CourseDetail_textContent")}>
              Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới
              bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các
              khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc
              để chinh phục con đường trở thành một lập trình viên.
            </div>
            <CurriculumOfCourse />
            <ModuleRow />
          </ModuleCol>
          <ModuleCol col_33>
            <CourseDetailPurchaseBadge />
          </ModuleCol>
        </ModuleRow>
      </ModuleGrid>
    </>
  );
};

export default CourseDetail;
