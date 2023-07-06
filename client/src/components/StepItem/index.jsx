import classNames from "classNames/bind";
import styles from "./StepItem.module.scss";
import { CheckIcon, PlayIcon } from "../../Icons";
const cx = classNames.bind(styles);
function StepItem() {
  return (
    <div className={cx("StepItem_wrapper", "learn-item")}>
      <div className={cx("StepItem_info")}>
        <h3 className={cx("StepItem_title")}>1. Lời khuyên trước khóa học</h3>
        <p className={cx("StepItem_desc")}>
        <PlayIcon className={cx('svg-inline--fa fa-circle-play','StepItem_lesson-icon')} />
          <span>04:20</span>
        </p>
      </div>
      <div className={cx("StepItem_icon-box")}>
        <CheckIcon className={cx('svg-inline--fa fa-circle-check','StepItem_state-icon')}/>
      </div>
    </div>
  );
}

export default StepItem;
