import classNames from "classNames/bind";
import styles from "./CircularProgressBar.module.scss";
const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
const CircularProgressBar = ({ children, isCicularProgressBar,isRightSide,courseStep }) => {
  return (
    <div  className={cx("CircularProgressBar_pie-wrapper",`${courseStep()}`)}>
      <div className={cx("CircularProgressBar_pie",{
        'CircularProgressBar_over-half':isCicularProgressBar
      })}>
        <div
          className={cx(
            "CircularProgressBar_left-side CircularProgressBar_half-circle"
          )}
        ></div>
       { isRightSide && <div
          className={cx(
            "CircularProgressBar_right-side CircularProgressBar_half-circle"
          )}
        ></div>}
      </div>
      <div className={cx("CircularProgressBar_shadow")}></div>
      <div className={cx("CircularProgressBar_body")}>{children}</div>
    </div>
  );
};

export default CircularProgressBar;
