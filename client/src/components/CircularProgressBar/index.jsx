import classNames from "classNames/bind";
import styles from "./CircularProgressBar.module.scss";
import CourseStep from "../CourseStep";
const cx = classNames.bind(styles);

const CircularProgressBar = () => {
  return (
    <div className={cx("CircularProgressBar_pie-wrapper")}>
      <div className={cx("CircularProgressBar_pie")}>
        <div
          className={cx(
            "CircularProgressBar_left-side CircularProgressBar_half-circle"
          )}
        ></div>
      </div>
      <div className={cx("CircularProgressBar_shadow")}></div>
      <div className={cx("CircularProgressBar_body")}>
        <CourseStep />
      </div>
      
    </div>
  );
};

export default CircularProgressBar;
