import classNames from "classNames/bind";
import styles from "./CurriculumOfCourse.module.scss";
import { PlayIcon } from "../../Icons";
const cx = classNames.bind(styles);

export function CurriculumOfCourseLesson(){
  return(
    <div className={cx('CurriculumOfCourse_lessonItem')}>
        <span className={cx('CurriculumOfCourse_floatLeft','CurriculumOfCourse_iconLink')}>
          <PlayIcon className={cx('CurriculumOfCourse_icon','CurriculumOfCourse_video','svg-inline--fa fa-circle')}/>
        <div className={cx("CurriculumOfCourse_lessonName")}>1. Giới thiệu khóa học</div>

        </span>
              <span className={cx('CurriculumOfCourse_floatRight')}>
                01:03
              </span>

    </div>

  )
}
export function CurriculumOfCoursePanel(){
  return(
    <div className={cx('CurriculumOfCourse_panel')}>
      <div className={cx('CurriculumOfCourse_panelHeading',"CurriculumOfCourse_activePanel","noselect")}>
          <h5 className={cx('CurriculumOfCourse_panelTitle')}>
            <div className={cx('CurriculumOfCourse_headline')}>
              <span className={cx('CurriculumOfCourse_floatLeft','CurriculumOfCourse_groupName')}>
                <strong>1. Gioi thieu</strong>

              </span>
              <span className={cx('CurriculumOfCourse_floatRight','CurriculumOfCourse_timeOfSection')}>
                3 bai hoc
              </span>

            </div>

          </h5>
      </div>
      <div className={cx('CurriculumOfCourse_collapse','CurriculumOfCourse_in')}>
        <div className={cx('CurriculumOfCourse_panelBody')}>
          <div>
            <CurriculumOfCourseLesson/>
            <CurriculumOfCourseLesson/>
            <CurriculumOfCourseLesson/>


          </div>

        </div>

      </div>

    </div>
  )
}


function CurriculumOfCourse() {
  return (
    <div className={cx("CurriculumOfCourse_curriculumOfCourse")}>
      <div className={cx("CurriculumOfCourse_headerSticky")}>
        <div className={cx("CurriculumOfCourse_headerBlock")}>
          <h2 className={cx("CurriculumOfCourse_floatLeft")}>Nội dung khóa học</h2>
        </div>
        <div className={cx("CurriculumOfCourse_subHeadWrapper")}>
          <ul>
            <li className={cx("CurriculumOfCourse_hiddenMobile")}>
              <strong>11 </strong> chương
            </li>
            <li className={cx("CurriculumOfCourse_dot","CurriculumOfCourse_hiddenMobile")}>
              •
            </li>
            <li>
              <strong>138 </strong> bài học
            </li>
            <li className={cx("CurriculumOfCourse_dot")}>•</li>
            <li>
              <span>
                Thời lượng <strong>10 giờ 29 phút</strong>
              </span>
            </li>
          </ul>
          <div className={cx("CurriculumOfCourse_toggleBtn")}>Mở rộng tất cả</div>
        </div>
      </div>
      <div className={cx("CurriculumOfCourse_curriculumPanel")}>
        <div className={cx('CurriculumOfCourse_panelGroup')}>
          <div>
            <CurriculumOfCoursePanel/>
            <CurriculumOfCoursePanel/>
            <CurriculumOfCoursePanel/>
            <CurriculumOfCoursePanel/>


          </div>

        </div>
      </div>
    </div>
  );
}

export default CurriculumOfCourse;
